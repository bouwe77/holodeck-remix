import { LoaderFunction, redirect } from 'remix'

//TODO Moet ik hier redirecten of kan ik gewoon iets renderen?

export const loader: LoaderFunction = () => {
  return redirect('/presentations')
}
