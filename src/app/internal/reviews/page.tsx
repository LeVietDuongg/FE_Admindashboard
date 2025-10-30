import { MdStar, MdLock } from 'react-icons/md';

const mockReviews = [
  {
    id: 1,
    company: 'ACME Corporation',
    rating: 5,
    comment: 'Dự án triển khai đúng tiến độ, chất lượng vượt mong đợi. Đội ngũ DUDISOFTWARE rất chuyên nghiệp.',
    author: 'Nguyễn Văn A',
    position: 'CTO',
  },
  {
    id: 2,
    company: 'GlobalTech Solutions',
    rating: 5,
    comment: 'Hỗ trợ tận tình, giải pháp phù hợp với nhu cầu doanh nghiệp. Chúng tôi rất hài lòng với sản phẩm.',
    author: 'Trần Thị B',
    position: 'Product Manager',
  },
  {
    id: 3,
    company: 'VietSmart Retail',
    rating: 4,
    comment: 'Đội ngũ phản hồi nhanh, sản phẩm ổn định. Một vài chi tiết nhỏ cần cải thiện nhưng tổng thể rất tốt.',
    author: 'Lê Văn C',
    position: 'CEO',
  },
];

export default function PrivateReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="mx-auto max-w-4xl">
        {/* Warning Banner */}
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 shadow-sm">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-amber-200 text-amber-700">
            <MdLock size={18} />
          </div>
          <div>
            <p className="font-medium text-amber-900">Trang Nội Bộ - Không Công Khai</p>
            <p className="mt-1 text-sm text-amber-800">
              Trang này chỉ chia sẻ riêng cho khách hàng khi bàn giao dự án. URL không được công khai trên website chính.
            </p>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Trusted by Our Customers</h1>
          <p className="mt-2 text-lg text-gray-600">Những đánh giá từ khách hàng đã hợp tác với DUDISOFTWARE</p>
        </div>

        {/* Reviews Grid */}
        <div className="space-y-6">
          {mockReviews.map((review) => (
            <div key={review.id} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white">
                      {review.company.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{review.company}</p>
                      <p className="text-sm text-gray-600">{review.author} · {review.position}</p>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <MdStar 
                        key={idx} 
                        size={20} 
                        className={idx < review.rating ? 'text-yellow-400' : 'text-gray-300'} 
                      />
                    ))}
                  </div>

                  <p className="mt-3 leading-relaxed text-gray-700">"{review.comment}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-center text-white shadow-xl">
          <h2 className="text-2xl font-bold">Bạn cũng muốn trở thành khách hàng của chúng tôi?</h2>
          <p className="mt-2 text-blue-100">Liên hệ DUDISOFTWARE để được tư vấn giải pháp phù hợp nhất</p>
          <div className="mt-4">
            <a href="/contact-success" className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-medium text-blue-600 shadow-md transition hover:bg-blue-50">
              Liên hệ ngay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
