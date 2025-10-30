import DashboardLayout from '@/components/layout/DashboardLayout';
import Link from 'next/link';
import { MdBusiness, MdWork, MdEmail, MdPeople, MdCode, MdPhone, MdLocationOn, MdStar } from 'react-icons/md';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 p-8 text-white shadow-xl">
          <h1 className="text-3xl font-bold">DUDISOFTWARE Admin Dashboard</h1>
          <p className="mt-2 text-white/90">Quản lý nội dung, tuyển dụng và liên hệ khách hàng</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Dự Án Hoàn Thành</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">15+</p>
                <p className="mt-1 text-xs text-green-600">↑ +3 tháng này</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <MdBusiness size={24} />
              </div>
            </div>
          </div>

          <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Vị Trí Tuyển Dụng</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">6</p>
                <p className="mt-1 text-xs text-green-600">↑ +2 vị trí mới</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                <MdWork size={24} />
              </div>
            </div>
          </div>

          <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Email Chờ Xử Lý</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">24</p>
                <p className="mt-1 text-xs text-amber-600">↓ -5 hôm qua</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 transition group-hover:bg-amber-600 group-hover:text-white">
                <MdEmail size={24} />
              </div>
            </div>
          </div>

          <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Khách Hàng Hài Lòng</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">50+</p>
                <p className="mt-1 text-xs text-green-600">↑ +8 khách hàng mới</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition group-hover:bg-purple-600 group-hover:text-white">
                <MdStar size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & Services */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Hành Động Nhanh</h3>
            </div>
            <div className="space-y-3">
              <Link href="/management/projects" className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition hover:border-blue-300 hover:bg-blue-50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <MdBusiness size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Quản lý dự án</p>
                    <p className="text-xs text-gray-600">Thêm, sửa, xóa dự án</p>
                  </div>
                </div>
                <span className="text-gray-400">→</span>
              </Link>

              <Link href="/management/careers" className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition hover:border-green-300 hover:bg-green-50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                    <MdWork size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Quản lý tuyển dụng</p>
                    <p className="text-xs text-gray-600">Thêm vị trí tuyển dụng mới</p>
                  </div>
                </div>
                <span className="text-gray-400">→</span>
              </Link>

              <Link href="/management/contacts" className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition hover:border-amber-300 hover:bg-amber-50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                    <MdEmail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Quản lý liên hệ & email</p>
                    <p className="text-xs text-gray-600">Cập nhật thông tin và trả lời email</p>
                  </div>
                </div>
                <span className="text-gray-400">→</span>
              </Link>
            </div>
          </div>

          {/* Services Overview */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Dịch Vụ DUDISOFTWARE</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-blue-50 p-3">
                <div className="flex items-center gap-2">
                  <MdCode size={18} className="text-blue-600" />
                  <p className="text-sm font-medium text-gray-900">Software Dev</p>
                </div>
              </div>
              <div className="rounded-lg bg-green-50 p-3">
                <div className="flex items-center gap-2">
                  <MdCode size={18} className="text-green-600" />
                  <p className="text-sm font-medium text-gray-900">Mobile App</p>
                </div>
              </div>
              <div className="rounded-lg bg-purple-50 p-3">
                <div className="flex items-center gap-2">
                  <MdCode size={18} className="text-purple-600" />
                  <p className="text-sm font-medium text-gray-900">UI/UX Design</p>
                </div>
              </div>
              <div className="rounded-lg bg-amber-50 p-3">
                <div className="flex items-center gap-2">
                  <MdCode size={18} className="text-amber-600" />
                  <p className="text-sm font-medium text-gray-900">Cloud Solutions</p>
                </div>
              </div>
              <div className="rounded-lg bg-indigo-50 p-3">
                <div className="flex items-center gap-2">
                  <MdCode size={18} className="text-indigo-600" />
                  <p className="text-sm font-medium text-gray-900">AI & ML</p>
                </div>
              </div>
              <div className="rounded-lg bg-rose-50 p-3">
                <div className="flex items-center gap-2">
                  <MdCode size={18} className="text-rose-600" />
                  <p className="text-sm font-medium text-gray-900">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity & Company Info */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Recent Activity */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Hoạt Động Gần Đây</h3>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-medium text-blue-600">
                  1
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Tin tuyển dụng Frontend Intern được thêm</p>
                  <p className="text-xs text-gray-500">2 giờ trước</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-medium text-green-600">
                  2
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Email từ client@vincentimo.com đã được trả lời</p>
                  <p className="text-xs text-gray-500">5 giờ trước</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-medium text-purple-600">
                  3
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Dự án Enterprise Management System cập nhật</p>
                  <p className="text-xs text-gray-500">1 ngày trước</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-medium text-amber-600">
                  4
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Đánh giá 5 sao từ Duong Hung Entertainment</p>
                  <p className="text-xs text-gray-500">2 ngày trước</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Contact Info */}
          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-sm">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Thông Tin Liên Hệ</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MdLocationOn size={20} className="mt-0.5 flex-shrink-0 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Địa chỉ chính:</p>
                  <p className="text-sm text-gray-700">232 Nguyễn Thị Minh Khai, P. Xuân Hoà, TP. HCM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MdLocationOn size={20} className="mt-0.5 flex-shrink-0 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Văn phòng phụ:</p>
                  <p className="text-sm text-gray-700">49/2 Đường 14, P. Thủ Đức, TP. HCM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MdPhone size={20} className="flex-shrink-0 text-blue-600" />
                <p className="text-sm text-gray-700">(+84) 909 163 821</p>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail size={20} className="flex-shrink-0 text-blue-600" />
                <p className="text-sm text-gray-700">contact@dudisoftware.com</p>
              </div>
            </div>
            <div className="mt-4">
              <Link 
                href="/management/contacts" 
                className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Chỉnh sửa thông tin
              </Link>
            </div>
          </div>
        </div>

        {/* System Info */}
        <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6 shadow-sm">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            <p>Hệ thống hoạt động bình thường · Phiên bản 1.0.0 · Cập nhật lần cuối: Hôm nay</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
