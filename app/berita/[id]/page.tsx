import { BeritaDetailHeader } from "@/components/berita/berita-detail-header"
import { BeritaDetailContent } from "@/components/berita/berita-detail-content"
import { BeritaRelated } from "@/components/berita/berita-related"

// This function would typically fetch data from an API
async function getArticleData(id: string) {
  // Mock data for example purposes
  return {
    id,
    title: `Judul Berita ${id}`,
    date: "15 Mei 2023",
    author: "Admin BEM",
    category: "Kegiatan",
    mainImage: `/demo.png`,
    images: [
      {
        url: `https://images.unsplash.com/photo-1726137569906-14f8079861fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D`,
        alt: `Dokumentasi Berita ${id} - 1`,
      },
      {
        url: `https://images.unsplash.com/photo-1744360820043-59b729149f7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D`,
        alt: `Dokumentasi Berita ${id} - 2`,
      },
      {
        url: `https://images.unsplash.com/photo-1745933121819-576063018cbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D`,
        alt: `Dokumentasi Berita ${id} - 3`,
      },
      {
        url: `https://images.unsplash.com/photo-1743275532247-98709c8c3f5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzZ8fHxlbnwwfHx8fHw%3D`,
        alt: `Dokumentasi Berita ${id} - 4`,
      },
      {
        url: `https://images.unsplash.com/photo-1746311460525-31a29b35f4c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDF8fHxlbnwwfHx8fHw%3D`,
        alt: `Dokumentasi Berita ${id} - 5`,
      },
      {
        url: `https://images.unsplash.com/photo-1746483966639-b8dafcd05f5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTN8fHxlbnwwfHx8fHw%3D`,
        alt: `Dokumentasi Berita ${id} - 6`,
      },
    ],
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    `,
    likes: 24,
    dislikes: 3,
  }
}

// This function would typically fetch data from an API
async function getRelatedArticles(id: string) {
  // Mock related articles
  return Array.from({ length: 3 }, (_, i) => ({
    id: (Number.parseInt(id) + i + 1) % 10 || 1, // Ensure we don't get the same ID and stay within 1-9
    title: `Judul Berita Terkait ${(Number.parseInt(id) + i + 1) % 10 || 1}`,
    date: `${12 + i} Mei 2023`,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: `/placeholder.svg?height=300&width=500&text=Berita ${(Number.parseInt(id) + i + 1) % 10 || 1}`,
  }))
}

export default async function BeritaDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = await getArticleData(id)
  const relatedArticles = await getRelatedArticles(id)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with Main Image */}
      <BeritaDetailHeader article={article} />

      {/* Article Content */}
      <BeritaDetailContent article={article} />

      {/* Related Articles */}
      <BeritaRelated relatedArticles={relatedArticles} />
    </div>
  )
}
