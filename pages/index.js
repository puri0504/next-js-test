import Link from 'next/link';
import Header from '../components/header';

const Index = () => (
  <div>
    <Header />
    <p>
      Welcome to my portfolio! This is designed with Next.js!

      {/*<Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>*/}
        {/*<a>{props.title}</a>*/}
      {/*</Link>*/}

      <Link href="/profile">
        <a>contact me</a>
      </Link>
      to get more information.
    </p>
  </div>
);

export default Index