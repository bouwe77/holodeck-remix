import { LoaderFunction, Outlet, useLoaderData } from 'remix'
import Header from '~/client/Header'

interface LoaderData {
  presentationSlug: string
}

export const loader: LoaderFunction = async ({ params }): Promise<LoaderData> => {
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
