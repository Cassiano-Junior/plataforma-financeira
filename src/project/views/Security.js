import React, { useContext, useEffect } from 'react'
import Auth from './layouts/Auth/Auth'
import AppContext from '../../framework/helpers/AppContext'
import api from '../../framework/helpers/api'
import swal from '../../framework/helpers/swal'
import asyncLocalStorage from '../../framework/helpers/asyncLocalStorage'
import styled from 'styled-components'
import CardSecurity from './layouts/components/CardSecurity/CardSecurity'
import { FiMail } from 'react-icons/fi'
import { BiScan } from 'react-icons/bi'
import ReactTooltip from 'react-tooltip'
import { useParams } from 'react-router-dom'
import {
  // HiOutlineLockClosed,
  // HiOutlineLockOpen,
  // HiOutlineDesktopComputer,
  // HiOutlineLocationMarker,
  // HiOutlineCalendar,
  HiOutlineClipboardCopy,
} from 'react-icons/hi'
import Api from '../../framework/helpers/api'
import Alert from '../../framework/helpers/Alert'
import { HiOutlineIdentification } from 'react-icons/hi'
import Clipboard from 'react-clipboard.js'

export default function Security() {
  let p = useParams()

  const GLOBAL = useContext(AppContext)

  useEffect(() => {
    if (GLOBAL.userInfos && !GLOBAL.userInfos.validation.email) {
      if (p.code) {
        Api.post(
          '/user/validate-email',
          {
            hash: p.code,
          },
          GLOBAL.token
        ).then(function (response) {
          if (response.status === 200) {
            Alert.simple('success', 'blabla', 'success').then(function () {
              window.location.href = '/security'
            })
          }
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function toggle2FA() {
    if (!GLOBAL.userInfos.validation.two_factor) {
      Alert.wait()
      Api.post('/user/two-factor-enable', {}, GLOBAL.token).then(function (
        response
      ) {
        Alert.preConfirm({
          title: GLOBAL.contentText.pages.security.labels.two_factor,
          html: (
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <img
                className="flex text-primary"
                src={`https://chart.apis.google.com/chart?cht=qr&chl=${response.data.qrcode}&chs=300x300`}
                loading="lazy"
                alt="qr-code"
              />
              <Clipboard
                data-clipboard-text={response.data.code}
                data-tip
                data-for="affiliate_link"
                data-event="click focus"
              >
                <div className="relative ">
                  <input
                    value={response.data.code}
                    readOnly
                    className=" w-[300px] rounded-md focus:outline-0 focus:ring-0 dark:bg-black py-1 px-2 border border-primary"
                  />
                  <div className="absolute  top-[0px] right-0 bg-primary pt-1 px-2 rounded-r-md text-light h-full">
                    <HiOutlineClipboardCopy className="w-5 h-5" />
                  </div>
                  <ReactTooltip
                    delayHide={1000}
                    id="affiliate_link"
                    effect="solid"
                    aria-haspopup="true"
                    place="bottom"
                    type="info"
                  >
                    {GLOBAL.contentText.general.copied}
                  </ReactTooltip>
                </div>
              </Clipboard>

              <input
                id="code2fa"
                type="number"
                placeholder="code"
                className=" w-[300px] rounded-md focus:outline-0 focus:ring-0 dark:bg-black py-1 px-2 border border-primary"
              />
            </div>
          ),
          icon: null,
          confirm: () => {
            let code = document.getElementById('code2fa')
            if (!code.value) {
              return false
            } else {
              return code.value
            }
          },
          confirmButtonText:
            GLOBAL.contentText.pages.security.two_factor.enable,
        }).then(function (code) {
          if (code.value) {
            Alert.wait()

            Api.post(
              '/user/two-factor-toggle',
              {
                code: response.data.code,
                type: 'enable',
                one_time_password: code.value,
              },
              GLOBAL.token
            ).then(function (response) {
              if (response.status === 200) {
                Alert.simple(
                  GLOBAL.contentText.commons.success,
                  GLOBAL.contentText.pages.profile.labels.two_factor.able,
                  'success'
                ).then(function () {
                  window.location.href = '/security'
                })
              }

              if (response.status === 422) {
                Alert.simple(
                  'Opss...',
                  GLOBAL.contentText.errors.incorrect_code,
                  'error'
                )
              }
            })
          }
        })
      })
    } else {
      Alert.preConfirm({
        title: GLOBAL.contentText.pages.security.labels.two_factor,
        html: (
          <div className="flex flex-col items-center justify-center w-full gap-2">
            <input
              id="code2fa"
              type="number"
              placeholder="code"
              className=" w-[300px] rounded-md focus:outline-0 focus:ring-0 dark:bg-black py-1 px-2 border border-primary"
            />
          </div>
        ),
        icon: 'warning',
        confirm: () => {
          let code = document.getElementById('code2fa')
          if (!code.value) {
            return false
          } else {
            return code.value
          }
        },
        confirmButtonText: GLOBAL.contentText.pages.security.two_factor.disable,
      }).then(function (code) {
        Alert.wait()

        Api.post(
          '/user/two-factor-toggle',
          {
            type: 'disable',
            token: code.value,
          },
          GLOBAL.token
        ).then(function (response) {
          if (response.status === 200) {
            Alert.simple(
              GLOBAL.contentText.commons.success,
              GLOBAL.contentText.pages.profile.labels.two_factor.disable,
              'success'
            ).then(function () {
              window.location.href = '/security'
            })
          }
          if (response.status === 422) {
            Alert.simple(
              'Opss...',
              GLOBAL.contentText.errors.incorrect_code,
              'error'
            )
          }
        })
      })
    }
  }

  function sendEmailValidation() {
    if (!GLOBAL.userInfos.validation.email) {
      Alert.wait()
      Api.post('/user/send-email-validation', {}, GLOBAL.token).then(function (
        response
      ) {
        if (response.status === 200) {
          Alert.simple(
            GLOBAL.contentText.commons.success,
            GLOBAL.contentText.user.success_sent_email,
            'success'
          )
        }
      })
    }
  }

  return (
    <Auth>
      <ContainerSecurity>
        <ContentSecurity>
          <CardSecurity
            description={'Autenticação de E-mail'}
            status="E-mail não verificado"
            onClick={() => sendEmailValidation()}
            icon={<FiMail />}
            button={'Validar agora'}

          />
          <CardSecurity
            description={'Verificação de duas etapas'}
            status="Desabilitado"
            icon={<BiScan />}
            onClick={() => toggle2FA()}
            button={'Habilitar agora'}
          />
          <CardSecurity
            description={'KYC'}
            status="Desabilitado"
            icon={<HiOutlineIdentification />}
            button={'Habilitar agora'}
          />
        </ContentSecurity>
      </ContainerSecurity>
    </Auth>
  )
}

const ContainerSecurity = styled.div.attrs({
  className: `
    flex
    flex-col
    pl-[3rem]
    gap-[2rem]
    pt-[6rem]
    lg:pl-[1rem]
    lg:pt-[1rem]
  `,
})``

const ContentSecurity = styled.div.attrs({
  className: `
    flex
    lg:flex-col
    lg:items-center
    gap-[2.18rem]
  `,
})``
