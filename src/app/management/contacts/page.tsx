'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import TranslationForm from '@/components/ui/TranslationForm';
import { useState } from 'react';
import { MdBusiness, MdLocationOn, MdEmail, MdPhone, MdInbox, MdSend, MdAttachFile, MdRefresh, MdDelete, MdAdd, MdInfo } from 'react-icons/md';

interface EmailItem { 
  id: string; 
  subject: string; 
  from: string; 
  date: string; 
  preview: string;
  unread: boolean;
}

export default function ContactsManagementPage() {
  const [companyName, setCompanyName] = useState<{ source: string; target: string }>({
    source: 'DUDI Software',
    target: 'DUDI Software',
  });
  const [addresses, setAddresses] = useState<Array<{ source: string; target: string }>>([
    { source: '232 Nguyễn Thị Minh Khai, Phường Xuân Hoà, TP. HCM', target: '232 Nguyen Thi Minh Khai, Xuan Hoa Ward, HCM City' },
    { source: '49/2 Đường 14, Phường Thủ Đức, TP. HCM', target: '49/2 Street 14, Thu Duc Ward, HCM City' },
  ]);
  const [description, setDescription] = useState<{ source: string; target: string }>({
    source: 'Công ty phần mềm hàng đầu với giải pháp công nghệ hiện đại, sáng tạo giúp doanh nghiệp phát triển bền vững.',
    target: 'Leading software company with modern, innovative technology solutions to help businesses grow sustainably.',
  });
  
  const [selectedTab, setSelectedTab] = useState<'info' | 'emails' | 'general'>('info');
  const [emailTab, setEmailTab] = useState<'inbox' | 'compose'>('inbox');
  
  const [contactEmails, setContactEmails] = useState<string[]>([
    'contact@dudisoftware.com',
    'support@dudisoftware.com',
    'sales@dudisoftware.com'
  ]);
  
  const [mails] = useState<EmailItem[]>([
    { id: '1', subject: 'Yêu cầu báo giá dự án ERP', from: 'client1@example.com', date: '2025-10-29', preview: 'Chúng tôi quan tâm đến giải pháp ERP...', unread: true },
    { id: '2', subject: 'Hợp tác phát triển ứng dụng mobile', from: 'partner@globaltech.com', date: '2025-10-28', preview: 'Công ty chúng tôi đang tìm đối tác...', unread: true },
    { id: '3', subject: 'Câu hỏi về dịch vụ bảo trì', from: 'support@acme.com', date: '2025-10-27', preview: 'Xin vui lòng cung cấp thông tin...', unread: false },
  ]);
  const [supportEmail, setSupportEmail] = useState<string>('contact@dudisoftware.com');
  const [generalItems, setGeneralItems] = useState<
    { id: string; title: { source: string; target: string }; content: { source: string; target: string } }[]
  >([
    {
      id: 'about',
      title: { source: 'Giới thiệu', target: 'About Us' },
      content: {
        source: 'DUDI Software được thành lập với sứ mệnh mang những giải pháp công nghệ hiện đại nhất đến doanh nghiệp Việt Nam.',
        target: 'DUDI Software was founded with the mission to bring the most modern technology solutions to Vietnamese businesses.',
      },
    },
    {
      id: 'mission',
      title: { source: 'Sứ mệnh', target: 'Mission' },
      content: {
        source: 'Giúp doanh nghiệp chuyển đổi số thành công với chiến lược và chi phí tối ưu',
        target: 'Help businesses achieve successful digital transformation through strategies and optimal costs',
      },
    },
    {
      id: 'vision',
      title: { source: 'Tầm nhìn', target: 'Vision' },
      content: {
        source: 'Trở thành công ty công nghệ hàng đầu Việt Nam với tầm vóc quốc tế.',
        target: 'Become a leading technology company in Vietnam with international reach.',
      },
    },
    {
      id: 'core-values',
      title: { source: 'Giá trị cốt lõi', target: 'Core Values' },
      content: {
        source: 'Chuyên nghiệp, hiệu quả, tin cậy. Hướng tới vị thế dẫn đầu tại Việt Nam và vươn ra quốc tế.',
        target: 'Professionalism, efficiency, trust. Becoming a leading technology company in Vietnam with international reach.',
      },
    },
  ]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Quản lý Thông tin Liên hệ & Email</h2>
          <p className="mt-1 text-sm text-gray-600">Cập nhật thông tin công ty và quản lý email liên hệ từ khách hàng.</p>
        </div>

        {/* Main Tabs */}
        <div className="flex gap-2 border-b border-gray-200">
          <button 
            onClick={() => setSelectedTab('info')}
            className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-medium transition ${selectedTab === 'info' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            <MdBusiness size={18} />
            Thông Tin Liên Hệ
          </button>
          <button 
            onClick={() => setSelectedTab('general')}
            className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-medium transition ${selectedTab === 'general' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            <MdInfo size={18} />
            Thông Tin Chung
          </button>
          <button 
            onClick={() => setSelectedTab('emails')}
            className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-medium transition ${selectedTab === 'emails' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            <MdEmail size={18} />
            Quản Lý Email ({mails.filter(m => m.unread).length} mới)
          </button>
        </div>

        {/* Contact Info Tab */}
        {selectedTab === 'info' && (
          <div className="space-y-6">
            {/* Company Name */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <MdBusiness size={18} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Tên Công Ty</h3>
              </div>
              <TranslationForm
                labelSource="Tên công ty (VI)"
                labelTarget="Company Name (EN)"
                sourceLang="vi"
                targetLang="en"
                valueSource={companyName.source}
                valueTarget={companyName.target}
                onChange={(v) => setCompanyName(v)}
              />
            </div>

            {/* Addresses */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  <MdLocationOn size={18} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Địa Chỉ (có thể thêm nhiều)</h3>
              </div>
              <div className="space-y-4">
                {addresses.map((addr, idx) => (
                  <div key={idx} className="rounded-lg border border-gray-200 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">Địa chỉ {idx + 1}</p>
                      <button
                        type="button"
                        onClick={() => setAddresses(addresses.filter((_, i) => i !== idx))}
                        className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
                        title="Xóa địa chỉ"
                      >
                        <MdDelete size={18} />
                      </button>
                    </div>
                    <TranslationForm
                      labelSource="Địa chỉ (VI)"
                      labelTarget="Address (EN)"
                      sourceLang="vi"
                      targetLang="en"
                      valueSource={addr.source}
                      valueTarget={addr.target}
                      onChange={(v) => {
                        const next = [...addresses];
                        next[idx] = v;
                        setAddresses(next);
                      }}
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setAddresses([...addresses, { source: '', target: '' }])}
                  className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  <MdAdd size={16} /> Thêm địa chỉ
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Mô Tả Công Ty</h3>
              <TranslationForm
                labelSource="Mô tả (VI)"
                labelTarget="Description (EN)"
                sourceLang="vi"
                targetLang="en"
                valueSource={description.source}
                valueTarget={description.target}
                onChange={(v) => setDescription(v)}
              />
            </div>

            {/* Other Contact Info */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Thông Tin Liên Lạc</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                    <MdEmail size={16} className="text-gray-500" />
                    Email Chính
                  </label>
                  <input 
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-500" 
                    placeholder="contact@dudisoftware.com"
                    defaultValue="contact@dudisoftware.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                    <MdEmail size={16} className="text-gray-500" />
                    Support Email (chọn từ danh sách)
                  </label>
                  <select
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-500"
                    value={supportEmail}
                    onChange={(e) => setSupportEmail(e.target.value)}
                  >
                    {contactEmails.map((email, idx) => (
                      <option key={idx} value={email}>{email}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                    <MdPhone size={16} className="text-gray-500" />
                    Số Điện Thoại
                  </label>
                  <input 
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-500" 
                    placeholder="+84 909 163 821"
                    defaultValue="+84 909 163 821"
                    type="tel"
                  />
                </div>
                <div>
                  <label className="mb-2 text-sm font-medium text-gray-700">Website</label>
                  <input 
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-500" 
                    placeholder="https://dudisoftware.com"
                    defaultValue="https://dudisoftware.com"
                    type="url"
                  />
                </div>
                <div>
                  <label className="mb-2 text-sm font-medium text-gray-700">Địa chỉ phụ</label>
                  <input 
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-500" 
                    placeholder="49/2 Đường 14, Phường Thủ Đức, TP. HCM"
                    defaultValue="49/2 Đường 14, Phường Thủ Đức, TP. HCM"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3">
              <button className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50">Hủy</button>
              <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-blue-700">Lưu Thay Đổi</button>
            </div>
          </div>
        )}

        {/* General Information Tab */}
        {selectedTab === 'general' && (
          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                    <MdInfo size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Quản Lý Thông Tin Chung</h3>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setGeneralItems([
                      ...generalItems,
                      { id: Math.random().toString(36).slice(2), title: { source: '', target: '' }, content: { source: '', target: '' } },
                    ])
                  }
                  className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  <MdAdd size={16} /> Thêm mục
                </button>
              </div>

              <div className="space-y-4">
                {generalItems.map((item, idx) => (
                  <div key={item.id} className="space-y-3 rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">Tiêu đề</p>
                      <button
                        type="button"
                        onClick={() => setGeneralItems(generalItems.filter((g) => g.id !== item.id))}
                        className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
                        title="Xóa mục"
                      >
                        <MdDelete size={18} />
                      </button>
                    </div>
                    <TranslationForm
                      labelSource="Tiêu đề (VI)"
                      labelTarget="Title (EN)"
                      sourceLang="vi"
                      targetLang="en"
                      valueSource={item.title.source}
                      valueTarget={item.title.target}
                      onChange={(v) => {
                        const next = [...generalItems];
                        next[idx] = { ...item, title: v };
                        setGeneralItems(next);
                      }}
                    />
                    <div className="pt-2">
                      <p className="mb-2 text-sm font-medium text-gray-900">Nội dung</p>
                      <TranslationForm
                        labelSource="Nội dung (VI)"
                        labelTarget="Content (EN)"
                        sourceLang="vi"
                        targetLang="en"
                        valueSource={item.content.source}
                        valueTarget={item.content.target}
                        onChange={(v) => {
                          const next = [...generalItems];
                          next[idx] = { ...item, content: v };
                          setGeneralItems(next);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-end gap-2">
                <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">Lưu Nháp</button>
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">Lưu Thay Đổi</button>
              </div>
            </div>
          </div>
        )}

        {/* Email Management Tab */}
        {selectedTab === 'emails' && (
          <div className="space-y-6">
            {/* Email List Management */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Email Liên Hệ Công Ty</h3>
                <button
                  type="button"
                  onClick={() => setContactEmails([...contactEmails, ''])}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  + Thêm Email
                </button>
              </div>
              <div className="space-y-2">
                {contactEmails.map((email, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-2 rounded-lg border border-gray-200 p-3 transition hover:bg-gray-50">
                    <div className="flex flex-1 items-center gap-3">
                      <MdEmail size={18} className="text-blue-600" />
                      <input
                        className="w-full rounded-lg border border-gray-300 p-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="email@example.com"
                        value={email}
                        onChange={(e) => {
                          const next = [...contactEmails];
                          next[idx] = e.target.value;
                          setContactEmails(next);
                        }}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setContactEmails(contactEmails.filter((_, i) => i !== idx))}
                      className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
                    >
                      <MdDelete size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Tabs */}
            <div className="flex gap-2 border-b border-gray-200">
              <button 
                onClick={() => setEmailTab('inbox')}
                className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-medium transition ${emailTab === 'inbox' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
              >
                <MdInbox size={18} />
                Hộp thư ({mails.filter(m => m.unread).length} mới)
              </button>
              <button 
                onClick={() => setEmailTab('compose')}
                className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-medium transition ${emailTab === 'compose' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
              >
                <MdSend size={18} />
                Soạn email
              </button>
            </div>

            {/* Inbox */}
            {emailTab === 'inbox' && (
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b p-4">
                  <h4 className="font-medium text-gray-900">Email đến</h4>
                  <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
                    <MdRefresh size={16} />
                    Làm mới
                  </button>
                </div>
                <div className="divide-y divide-gray-200">
                  {mails.map((m) => (
                    <div key={m.id} className={`flex items-start gap-4 p-4 transition hover:bg-gray-50 ${m.unread ? 'bg-blue-50/30' : ''}`}>
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-medium text-white">
                        {m.from.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm ${m.unread ? 'font-semibold text-gray-900' : 'font-medium text-gray-700'}`}>
                              {m.subject}
                            </p>
                            <p className="text-xs text-gray-600">{m.from}</p>
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap">{m.date}</span>
                        </div>
                        <p className="mt-1 text-sm text-gray-600 line-clamp-1">{m.preview}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-100">Xem chi tiết</button>
                          <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-blue-700">Trả lời</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Compose */}
            {emailTab === 'compose' && (
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <MdEmail size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Soạn Email Mới</h3>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Từ Email</label>
                    <select className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-500">
                      {contactEmails.map((email, idx) => (
                        <option key={idx} value={email}>{email}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Đến (To)</label>
                    <input 
                      className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-500" 
                      placeholder="client@example.com" 
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Tiêu đề (Subject)</label>
                    <input 
                      className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-500" 
                      placeholder="Re: Yêu cầu báo giá..." 
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Nội dung</label>
                    <textarea 
                      className="min-h-64 w-full resize-y rounded-lg border border-gray-300 p-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-500" 
                      placeholder="Xin chào,&#10;&#10;Cảm ơn bạn đã liên hệ với DUDISOFTWARE..."
                    />
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                    <button 
                      type="button" 
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-gray-900"
                    >
                      <MdAttachFile size={18} />
                      Đính kèm tập tin
                    </button>
                    <div className="flex items-center gap-2">
                      <button 
                        type="button" 
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-white"
                      >
                        Lưu nháp
                      </button>
                      <button 
                        type="button" 
                        className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-blue-700"
                      >
                        <MdSend size={16} />
                        Gửi
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
