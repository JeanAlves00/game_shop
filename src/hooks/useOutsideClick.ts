import { useEffect } from 'react'

type UseOutsideClickProps = {
  refs: React.RefObject<HTMLElement>[]
  isActive: boolean
  callback: () => void
}

export const useOutsideClick = ({
  refs,
  isActive,
  callback
}: UseOutsideClickProps) => {
  useEffect(() => {
    if (!isActive) return

    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutside = refs.every(
        (ref) => !ref.current?.contains(event.target as Node)
      )

      if (clickedOutside) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [refs, isActive, callback])
}
