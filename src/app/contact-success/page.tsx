import Link from 'next/link';
import { MdCheckCircle, MdArrowForward } from 'react-icons/md';

export default function ContactSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-xl">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg">
          <MdCheckCircle size={48} className="text-white" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900">Gửi Email Thành Công!</h1>
        <p className="mt-3 text-gray-600">
          Cảm ơn bạn đã liên hệ với <span className="font-semibold text-blue-600">DUDISOFTWARE</span>.
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Chúng tôi đã nhận được email của bạn và sẽ phản hồi trong thời gian sớm nhất.
        </p>

        <div className="mt-8 space-y-3">
          <Link 
            href="/" 
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-blue-700"
          >
            Về Trang Chủ
            <MdArrowForward size={18} />
          </Link>
          <div className="flex gap-2">
            <Link 
              href="/projects" 
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Xem Dự Án
            </Link>
            <Link 
              href="/careers" 
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Tuyển Dụng
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-blue-50 p-4 text-left">
          <p className="text-sm font-medium text-gray-900">Thông Tin Liên Hệ</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>Email: <a href="mailto:contact@dudisoftware.com" className="text-blue-600 hover:underline">contact@dudisoftware.com</a></li>
            <li>Hotline: <a href="tel:+84000000000" className="text-blue-600 hover:underline">+84 00 0000 000</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
