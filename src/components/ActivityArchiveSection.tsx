// src/components/ActivityArchiveSection.tsx
const ActivityArchiveSection = () => {
  const activities = Array(6).fill(null);

  return (
    <section className="container py-16" style={{ backgroundColor: 'var(--color-background-white)' }}>
      <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--color-text-dark)' }}>ARSIP KEGIATAN</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {activities.map((_, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md h-48 flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-background-white)', border: '1px solid var(--color-border-light)', color: 'var(--color-text-gray)' }}
          >
            <p>Kegiatan {index + 1}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivityArchiveSection;