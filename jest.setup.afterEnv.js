import { configure } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import 'jest-canvas-mock'

configure({ testIdAttribute: 'data-test', asyncUtilTimeout: 2500 })