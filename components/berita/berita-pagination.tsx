import Link from "next/link"

export function BeritaPagination() {
  return (
    <div className="flex justify-center mt-12">
      <nav className="inline-flex">
        <Link
          href="#"
          className="px-4 py-2 border border-border bg-white text-foreground hover:bg-background/5 rounded-l-md"
        >
          Prev
        </Link>
        <Link href="#" className="px-4 py-2 border-t border-b border-border bg-primary text-white">
          1
        </Link>
        <Link
          href="#"
          className="px-4 py-2 border-t border-b border-border bg-white text-foreground hover:bg-background/5"
        >
          2
        </Link>
        <Link
          href="#"
          className="px-4 py-2 border-t border-b border-border bg-white text-foreground hover:bg-background/5"
        >
          3
        </Link>
        <Link
          href="#"
          className="px-4 py-2 border border-border bg-white text-foreground hover:bg-background/5 rounded-r-md"
        >
          Next
        </Link>
      </nav>
    </div>
  )
}
