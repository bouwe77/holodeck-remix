import { RemixBrowser } from '@remix-run/react'

// Should use hydrateRoot for React 18, but this has some issues still,
// so by using hydrate the app will still behave as if it's running React 17

import { hydrate } from 'react-dom'

hydrate(<RemixBrowser />, document)
