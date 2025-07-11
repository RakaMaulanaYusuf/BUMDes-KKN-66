// src/components/NewsSection.tsx
import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl?: string; // Ubah menjadi opsional karena ada placeholder
}

const dummyNews: NewsItem[] = [
  {
    id: 1,
    title: 'JUDUL BERITA',
    excerpt: 'ini adalah cuplikan dari berita atau artikel ini. cuplikan tentang apa...',
    date: '10 Juni 2024',
    category: 'Berita',
    imageUrl: '/images/gambar1.jpg', // Gunakan gambar nyata jika ada
  },
  {
    id: 2,
    title: 'JUDUL BERITA',
    excerpt: 'ini adalah cuplikan dari berita atau artikel ini. cuplikan tentang apa...',
    date: '05 Juni 2024',
    category: 'Berita',
    imageUrl: '/images/placeholder-news.jpg', // Contoh dengan placeholder
  },
  // Tambahkan berita lain jika diperlukan
];

const NewsSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: 'var(--color-background-white)' }}>
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--color-text-dark)' }}>BERITA</h2>
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {dummyNews.map((news) => (
            <div key={news.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
                 style={{ border: '1px solid var(--color-border-light)' }}>
              <div className="w-full md:w-1/3 h-48 md:h-auto relative flex items-center justify-center"
                   style={{ backgroundColor: 'var(--color-border-light)' }}>
                {news.imageUrl ? ( // Conditional rendering jika imageUrl ada
                  <Image
                    src={news.imageUrl}
                    alt={news.title}
                    fill // Menggantikan layout="fill"
                    style={{ objectFit: 'cover' }} // Menggantikan objectFit="cover"
                    className="rounded-lg"
                  />
                ) : (
                  <span style={{ color: 'var(--color-text-gray)' }}>Gambar Placeholder</span>
                )}
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-dark)' }}>{news.title}</h3>
                  <p className="text-sm mb-2" style={{ color: 'var(--color-text-gray)' }}>{news.date} | {news.category}</p>
                  <p className="mb-4" style={{ color: 'var(--color-text-dark)' }}>{news.excerpt}</p>
                </div>
                <Link href={`/berita/${news.id}`} className="inline-block py-2 px-4 rounded-md hover:opacity-90 transition duration-300"
                  style={{ backgroundColor: 'var(--color-news-button)', color: 'white' }}>
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;