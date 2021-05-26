/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from '../link/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path='/'
      sx={{
        variant: 'link.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      { ... rest }
    >
      <Image src={ src } alt='landing page logo'/>
    </Link>
  );
}