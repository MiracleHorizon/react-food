import { type FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { Routes } from '@router/Routes.enum'
import type { OnSubmitData } from '@components/general/SearchWidget'
import { Input } from './SearchForm.styled'

export const SearchForm: FC<Props> = ({ onSubmit }) => {
  const router = useRouter()

  const { register, handleSubmit, getValues, setValue, watch, resetField } =
    useForm({
      defaultValues: {
        query: ''
      }
    })

  const handleClear = async () => {
    resetField('query')
    if (router.pathname !== Routes.HOME) {
      await router.push(Routes.HOME)
    }
  }

  useEffect(() => {
    const inputQueryValue = getValues('query')
    const routerQueryValue = router.query.q

    if (!routerQueryValue || Array.isArray(routerQueryValue)) return

    const isQueriesMatches = inputQueryValue === routerQueryValue

    if (!isQueriesMatches) {
      setValue('query', routerQueryValue)
    }
  }, [getValues, router.query.q, setValue])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        data-testid='search-input'
        type='text'
        placeholder='Найти товар'
        register={register('query', {
          minLength: 2,
          maxLength: 40
        })}
        leadIcon={
          <svg
            width={24}
            height={24}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        }
        isEmpty={watch('query') === ''}
        onClear={handleClear}
      />
    </form>
  )
}

interface Props {
  onSubmit: (data: OnSubmitData) => void
}
