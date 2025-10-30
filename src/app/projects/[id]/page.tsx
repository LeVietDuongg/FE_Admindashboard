import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MdArrowBack, MdCheck } from 'react-icons/md';

const mockProjects: Record<string, { name: string; content: string; features: string[]; tech: string[] }> = {
  'erp-suite': { 
    name: 'ERP Suite', 
    content: 'Bộ giải pháp quản trị tổng thể cho doanh nghiệp vừa và nhỏ. Tích hợp quản lý tài chính, nhân sự, kho vận và bán hàng trong một hệ thống duy nhất.',
    features: [
      'Quản lý tài chính và kế toán tự động',
      'Quản lý nhân sự và chấm công',
      'Quản lý kho vận và logistics',
      'Báo cáo và phân tích theo thời gian thực'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis']
  },
  'ecommerce-platform': { 
    name: 'E-commerce Platform', 
    content: 'Nền tảng thương mại điện tử linh hoạt và mở rộng, hỗ trợ đa kênh bán hàng và tích hợp thanh toán.',
    features: [
      'Quản lý sản phẩm và danh mục',
      'Giỏ hàng và thanh toán đa phương thức',
      'Quản lý đơn hàng và vận chuyển',
      'Tích hợp marketing và SEO'
    ],
    tech: ['Next.js', 'Stripe', 'MongoDB', 'AWS']
  },
  'ai-insights': { 
    name: 'AI Insights', 
    content: 'Khai phá dữ liệu và dự báo bằng trí tuệ nhân tạo. Phân tích xu hướng, dự đoán hành vi khách hàng và tối ưu quyết định kinh doanh.',
    features: [
      'Phân tích dữ liệu tự động',
      'Dự báo xu hướng và nhu cầu',
      'Phân khúc khách hàng thông minh',
      'Dashboard trực quan và báo cáo'
    ],
    tech: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL']
  },
};

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = mockProjects[params.id];
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="mx-auto max-w-4xl p-6 md:p-10">
        {/* Back Link */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-700">
          <MdArrowBack size={18} />
          Quay lại danh sách dự án
        </Link>
        
        {/* Project Details */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900">{project.name}</h1>
          <div className="prose mt-4 max-w-none text-gray-700">
            <p className="text-lg leading-relaxed">{project.content}</p>
          </div>

          {/* Features */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Tính Năng Chính</h2>
            <ul className="mt-4 space-y-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <MdCheck size={16} />
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Công Nghệ Sử Dụng</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
            <p className="text-sm font-medium text-gray-900">Bạn quan tâm đến dự án tương tự?</p>
            <p className="mt-1 text-sm text-gray-600">Liên hệ DUDISOFTWARE để được tư vấn chi tiết</p>
            <div className="mt-4 flex gap-3">
              <a href="/contact-success" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-blue-700">
                Liên hệ ngay
              </a>
              <Link href="/projects" className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-white">
                Xem dự án khác
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
