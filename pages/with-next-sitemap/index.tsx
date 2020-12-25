import Link from 'next/link';

const HelloWorld = () => (
  <div>
    <h1>Hello World Page</h1>
    <ol>
      <li>
        <Link
          href="/with-next-sitemap/[dynamic]"
          as="/with-next-sitemap/page-1"
        >
          <a>Link to dynamic page 1</a>
        </Link>
      </li>
      <li>
        <Link
          href="/with-next-sitemap/[dynamic]"
          as="/with-next-sitemap/page-2"
        >
          <a>Link to dynamic page 2</a>
        </Link>
      </li>
      <li>
        <Link
          href="/with-next-sitemap/[dynamic]"
          as="/with-next-sitemap/page-3"
        >
          <a>Link to dynamic page 3</a>
        </Link>
      </li>
      <li>
        <Link
          href="/with-next-sitemap/[dynamic]"
          as="/with-next-sitemap/page-4"
        >
          <a>Link to dynamic page 4</a>
        </Link>
      </li>
      <li>
        <Link
          href="/with-next-sitemap/[dynamic]"
          as="/with-next-sitemap/page-5"
        >
          <a>Link to dynamic page 5</a>
        </Link>
      </li>
    </ol>
  </div>
);

export default HelloWorld;
