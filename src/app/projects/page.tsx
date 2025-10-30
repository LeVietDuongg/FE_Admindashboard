import Link from 'next/link';
import { MdArrowForward, MdCode, MdTrendingUp, MdBusiness } from 'react-icons/md';

const mockProjects = [
  { 
    id: 'erp-suite', 
    name: 'ERP Suite', 
    summary: 'Giải pháp quản trị doanh nghiệp toàn diện',
    category: 'Enterprise',
    icon: MdBusiness,
    color: 'blue'
  },
  { 
    id: 'ecommerce-platform', 
    name: 'E-commerce Platform', 
    summary: 'Nền tảng thương mại điện tử đa kênh',
    category: 'Retail',
    icon: MdTrendingUp,
    color: 'green'
  },
  { 
    id: 'ai-insights', 
    name: 'AI Insights', 
    summary: 'Phân tích dữ liệu thông minh bằng AI',
    category: 'Data Science',
    icon: MdCode,
    color: 'purple'
  },
];

const colorVariants = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', badge: 'bg-blue-50 text-blue-700' },
  green: { bg: 'bg-green-100', text: 'text-green-600', badge: 'bg-green-50 text-green-700' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', badge: 'bg-purple-50 text-purple-700' },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="mx-auto max-w-6xl p-6 md:p-10">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Dự Án Công Khai</h1>
          <p className="mt-2 text-lg text-gray-600">Một số dự án tiêu biểu của DUDISOFTWARE</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockProjects.map((p) => {
            const Icon = p.icon;
            const colors = colorVariants[p.color as keyof typeof colorVariants];
            return (
              <Link 
                key={p.id} 
                href={`/projects/${p.id}`}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-xl"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}>
                  <Icon size={24} />
                </div>
                <div className="mb-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${colors.badge}`}>
                    {p.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 transition group-hover:text-blue-600">{p.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.summary}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-600">
                  Xem chi tiết
                  <MdArrowForward className="transition group-hover:translate-x-1" size={16} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-center text-white shadow-xl">
          <h2 className="text-2xl font-bold">Bạn có dự án cần triển khai?</h2>
          <p className="mt-2 text-blue-100">Liên hệ DUDISOFTWARE để được tư vấn giải pháp phù hợp</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a href="/contact-success" className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-blue-600 shadow-md transition hover:bg-blue-50">
              Liên hệ ngay
            </a>
            <a href="/careers" className="rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20">
              Xem tuyển dụng
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
