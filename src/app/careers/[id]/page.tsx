import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MdArrowBack, MdLocationOn, MdWork, MdAttachMoney, MdCheck } from 'react-icons/md';

const mockJobs: Record<string, { 
  title: string; 
  location: string; 
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
}> = {
  'frontend-dev': {
    title: 'Frontend Developer',
    location: 'HCMC',
    type: 'Full-time',
    salary: '15-20 triệu',
    description: 'Chúng tôi đang tìm kiếm Frontend Developer có kinh nghiệm để xây dựng các ứng dụng web hiện đại với React/Next.js. Bạn sẽ làm việc trong môi trường năng động, cùng team phát triển các sản phẩm cho khách hàng lớn.',
    requirements: [
      'Kinh nghiệm 2+ năm với React/Next.js',
      'Thành thạo HTML, CSS, JavaScript/TypeScript',
      'Hiểu biết về responsive design và UX',
      'Kinh nghiệm với Git và CI/CD'
    ],
    benefits: [
      'Lương cạnh tranh, thưởng theo dự án',
      'Bảo hiểm đầy đủ, phụ cấp ăn trưa',
      'Làm việc linh hoạt, remote 2 ngày/tuần',
      'Đào tạo và phát triển kỹ năng'
    ]
  },
  'backend-eng': {
    title: 'Backend Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '18-25 triệu',
    description: 'Tham gia thiết kế và phát triển hệ thống backend, API và microservices cho các sản phẩm quy mô lớn. Làm việc với công nghệ hiện đại và kiến trúc scalable.',
    requirements: [
      'Kinh nghiệm 3+ năm backend development',
      'Thành thạo Node.js/Python hoặc Go',
      'Kinh nghiệm với databases (SQL/NoSQL)',
      'Hiểu biết về microservices và cloud'
    ],
    benefits: [
      'Mức lương hấp dẫn + bonus',
      'Làm việc remote 100%',
      'Trang thiết bị làm việc đầy đủ',
      'Review lương 2 lần/năm'
    ]
  },
  'uiux-designer': {
    title: 'UI/UX Designer',
    location: 'Hanoi',
    type: 'Full-time',
    salary: '12-18 triệu',
    description: 'Nghiên cứu người dùng, thiết kế wireframes, prototypes và giao diện sản phẩm. Cùng team tạo ra trải nghiệm người dùng xuất sắc cho các ứng dụng web và mobile.',
    requirements: [
      'Kinh nghiệm 2+ năm thiết kế UI/UX',
      'Thành thạo Figma, Sketch hoặc Adobe XD',
      'Hiểu biết về design systems',
      'Portfolio thể hiện sản phẩm đã làm'
    ],
    benefits: [
      'Lương và phúc lợi cạnh tranh',
      'Môi trường sáng tạo, tự do',
      'Các workshop và khóa học chuyên môn',
      'Team building và du lịch hàng năm'
    ]
  },
};

export default function CareerDetailPage({ params }: { params: { id: string } }) {
  const job = mockJobs[params.id];
  if (!job) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="mx-auto max-w-4xl p-6 md:p-10">
        {/* Back Link */}
        <Link href="/careers" className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-700">
          <MdArrowBack size={18} />
          Quay lại danh sách tuyển dụng
        </Link>
        
        {/* Job Details */}
        <div className="mt-6 space-y-6">
          {/* Header Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MdLocationOn size={18} className="text-gray-500" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MdWork size={18} className="text-gray-500" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MdAttachMoney size={18} className="text-gray-500" />
                <span>{job.salary}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Mô Tả Công Việc</h2>
            <p className="mt-3 leading-relaxed text-gray-700">{job.description}</p>
          </div>

          {/* Requirements */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Yêu Cầu</h2>
            <ul className="mt-4 space-y-3">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <MdCheck size={16} />
                  </div>
                  <span className="text-sm text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Quyền Lợi</h2>
            <ul className="mt-4 space-y-3">
              {job.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <MdCheck size={16} />
                  </div>
                  <span className="text-sm text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-center text-white shadow-xl">
            <h2 className="text-2xl font-bold">Sẵn Sàng Ứng Tuyển?</h2>
            <p className="mt-2 text-blue-100">Gửi CV và thông tin liên hệ của bạn cho chúng tôi</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a href="/contact-success" className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-blue-600 shadow-md transition hover:bg-blue-50">
                Ứng tuyển ngay
              </a>
              <Link href="/careers" className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20">
                Xem vị trí khác
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
