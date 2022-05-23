import { Link, useNavigate } from 'remix'

export default function SlideNavigation({
  numberOfSlides,
  previousSlideNr,
  nextSlideNr,
}: {
  numberOfSlides: number
  previousSlideNr?: number
  nextSlideNr?: number
}) {
  const navigate = useNavigate()

  return (
    <div>
      <div>
        {Array(numberOfSlides)
          .fill(0)
          .map((_, i) => (
            <Link to={`/slides/${i + 1}`} key={i}>
              {i + 1}
            </Link>
          ))}
      </div>

      <div>
        {previousSlideNr && <button onClick={() => navigate(`/slides/${previousSlideNr}`)}>Previous</button>}
        {nextSlideNr && <button onClick={() => navigate(`/slides/${nextSlideNr}`)}>Next</button>}
      </div>
    </div>
  )
}
