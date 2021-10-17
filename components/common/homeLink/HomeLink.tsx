import Link from "next/link";
import StyledHomeLink from './StyledHomeLink';

const HomeLink = () =>
  <StyledHomeLink>
    <Link href={'/'}>
      <a>
          Go to Home
      </a>
    </Link>
  </StyledHomeLink>

export default HomeLink;
