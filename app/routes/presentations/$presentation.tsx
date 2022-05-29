import { Outlet, useLoaderData } from '@remix-run/react'
import { LoaderFunction } from '@remix-run/node'
import Header from '~/components/portal/Header'

interface LoaderData {
  presentationSlug: string
}

export const loader: LoaderFunction = async ({ params }): Promise<LoaderData> => {
  // No need to do in a loader, could also useSearchParams in the component.
  // However, I will expand on this later and need a loader anyway, so let's leave it for now.
  return { presentationSlug: params.presentation ?? '' }
}

export default function Index() {
  const { presentationSlug } = useLoaderData<LoaderData>()

  return (
    <div>
      <Header slug={presentationSlug} />

      <Outlet />
    </div>
  )
}
