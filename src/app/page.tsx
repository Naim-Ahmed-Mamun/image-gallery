import Header from "@/layout/header";
import ImageGalleryLists from "@/components/ImageGalleryLists";


export default function HomePage() {
  return (
    <div className="container">
      <main>
        <div className="image-gallery">
          {/* header start */}
          <Header />
          {/* header end */}
          <ImageGalleryLists />
        </div>
      </main>
    </div>
  )
}
