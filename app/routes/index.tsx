import { redirect } from '@remix-run/node'
import type { LoaderFunction } from '@remix-run/node'

//TODO Moet ik hier redirecten of kan ik gewoon iets renderen?

export const loader: LoaderFunction = () => {
  return redirect('/presentations')
}
