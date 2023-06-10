import React, { useState, useEffect, useRef, FC } from 'react'
import { ReactComponent as PlaceHolderIcon } from '@Svg/placeholder.svg'

export type DynamicIconProps = {
  className?: string
  name: string
  size?: number | string
  fill?: string
}

const DynamicIcon: FC<DynamicIconProps> = ({
  name,
  size = 24,
  fill,
  ...rest
}) => {
  const ImportedIconRef = useRef<LazyIcon>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const importIcon = async () => {
      try {
        const { ReactComponent: namedImport } = await import(
          `../../svg/${name}.svg`
        )
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ImportedIconRef.current = namedImport
        // eslint-disable-next-line no-useless-catch
      } catch (err) {
        throw err
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [name])

  if (loading) {
    return <PlaceHolderIcon width={size} height={size} fill={fill} {...rest} />
  }

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef
    return <ImportedIcon width={size} height={size} fill={fill} {...rest} />
  }

  return null
}

export default DynamicIcon
