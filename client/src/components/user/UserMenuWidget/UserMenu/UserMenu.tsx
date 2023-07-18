import { type FC, useCallback, useMemo, useRef } from 'react'
import { useRouter } from 'next/router'
import { Dialog } from '@headlessui/react'

import { UserMenuItem } from './UserMenuItem'
import { authService } from '@api/AuthService'
import { useModalsStore } from '@stores/modalsStore'
import { useDeinitializeUser } from '@hooks/useDeinitializeUser'
import { RouteStatusHandler } from '@utils/RouteStatusHandler'
import { Routes } from '@router/Routes.enum'
import type { UserModel } from '@models/user/User'
import * as Menu from './UserMenu.styled'

export const UserMenu: FC<Props> = ({ user, isOpen, onClose }) => {
  const router = useRouter()
  const panelRef = useRef<HTMLDivElement>(null)

  const openPersonalDataModal = useModalsStore(
    state => state.openPersonalDataModal
  )
  const openUserAddressesModal = useModalsStore(
    state => state.openDeliveryAddressesModal
  )

  const { deinitialize } = useDeinitializeUser()
  const signout = useCallback(() => {
    authService
      .signout()
      .then(deinitialize)
      .then(() => {
        const pathName = router.asPath as Routes
        const routeStatusHandler = new RouteStatusHandler(pathName)

        if (routeStatusHandler.isAuthorizedRoute()) {
          router.replace(Routes.HOME)
        }
      })
  }, [deinitialize, router])

  const menuItems = useMemo(() => {
    return [
      {
        title: 'Мои данные',
        action: openPersonalDataModal
      },
      {
        title: 'Мои адреса',
        action: openUserAddressesModal
      },
      {
        title: 'Мои заказы',
        href: Routes.ORDERS
      },
      {
        title: 'Выйти',
        action: signout
      }
    ]
  }, [openPersonalDataModal, openUserAddressesModal, signout])

  return (
    <Dialog
      as={Menu.Root}
      initialFocus={panelRef}
      unmount={true}
      open={isOpen}
      onClose={onClose}
    >
      <Dialog.Panel as={Menu.Panel} ref={panelRef}>
        <Dialog.Title as={Menu.Title}>{user.name}</Dialog.Title>
        <Menu.List>
          {menuItems.map(item => (
            <UserMenuItem key={item.title} {...item} onClose={onClose} />
          ))}
        </Menu.List>
      </Dialog.Panel>
    </Dialog>
  )
}

interface Props {
  user: UserModel
  isOpen: boolean
  onClose: VoidFunction
}
