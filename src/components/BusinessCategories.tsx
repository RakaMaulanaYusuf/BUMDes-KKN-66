// src/components/BusinessCategories.tsx
const BusinessCategories = () => {
  const categories = [
    { name: 'MAGGOT' },
    { name: 'GELIMPAH' },
    { name: 'USAHA' },
    // Tambahkan kategori lain jika ada
  ];

  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center h-48 border border-gray-200"
          >
            <h3 className="text-3xl font-semibold text-gray-700">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessCategories;