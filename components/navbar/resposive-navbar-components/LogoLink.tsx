import Link from 'next/link';
export function LogoLink() {
  return (
    <div className="mb-4 text-center sm:mb-0">
       <Link href="/"><span className="sr-only">PYLHR</span>
                        <img className="w-auto h-8 sm:h-10" src="https://svgshare.com/i/16fj.svg" loading="lazy" width="202" height="40" />
      </Link>
    </div>
  );
}