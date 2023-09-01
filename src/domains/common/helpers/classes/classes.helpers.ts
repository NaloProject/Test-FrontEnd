import { oneLine } from 'common-tags'

// utility used for dynamic~classnames merge
export const CNM = (...classes: (false | null | undefined | string)[]) => {
	return oneLine(classes.filter(Boolean).join(' '))
}
