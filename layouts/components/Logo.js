import config from '@config/config.json';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  const { logo, logo_width, logo_height, title } = config.site;

  return (
    <Link href="/" className="block">
      {logo && (
        <Image
          width={logo_width * 2}
          height={logo_height * 2}
          src={logo}
          alt={title}
          priority
          style={{
            height: logo_height + 'px',
            width: logo_width + 'px',
          }}
        />
      )}
    </Link>
  );
};

export default Logo;
