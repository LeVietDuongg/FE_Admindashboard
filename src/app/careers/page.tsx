import Link from 'next/link';
import { MdArrowForward, MdLocationOn, MdWork } from 'react-icons/md';

const mockJobs = [
  { 
    id: 'frontend-dev', 
    title: 'Frontend Developer', 
    location: 'HCMC', 
    short: 'Xây dựng giao diện người dùng với React/Next.js',
    type: 'Full-time',
    salary: '15-20 triệu'
  },
  { 
    id: 'backend-eng', 
    title: 'Backend Engineer', 
    location: 'Remote', 
    short: 'Thiết kế và phát triển API, microservices',
    type: 'Full-time',
    salary: '18-25 triệu'
  },
  { 
    id: 'uiux-designer', 
    title: 'UI/UX Designer', 
    location: 'Hanoi', 
    short: 'Thiết kế trải nghiệm và giao diện sản phẩm',
    type: 'Full-time',
    salary: '12-18 triệu'
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="mx-auto max-w-5xl p-6 md:p-10">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Cơ Hội Nghề Nghiệp</h1>
          <p className="mt-2 text-lg text-gray-600">Tham gia đội ngũ DUDISOFTWARE - Nơi ý tưởng trở thành hiện thực</p>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {mockJobs.map((job) => (
            <div key={job.id} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-xl">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold text-gray-900 transition group-hover:text-blue-600">{job.title}</h3>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                      {job.type}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MdLocationOn size={16} className="text-gray-500" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <MdWork size={16} className="text-gray-500" />
                      {job.salary}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">{job.short}</p>
                </div>
                <div>
                  <Link 
                    className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-blue-700" 
                    href={`/careers/${job.id}`}
                  >
                    Xem chi tiết
                    <MdArrowForward size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-8 text-center text-white shadow-xl">
          <h2 className="text-2xl font-bold">Không tìm thấy vị trí phù hợp?</h2>
          <p className="mt-2 text-indigo-100">Gửi CV và giới thiệu bản thân, chúng tôi sẽ liên hệ khi có cơ hội phù hợp</p>
          <div className="mt-4">
            <a href="/contact-success" className="inline-block rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-indigo-600 shadow-md transition hover:bg-indigo-50">
              Gửi CV ngay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
