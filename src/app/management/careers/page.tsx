'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import { useState } from 'react';
import { MdAdd, MdEdit, MdDelete, MdVisibility } from 'react-icons/md';

export default function CareersManagementPage() {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const [mockCareers, setMockCareers] = useState([
    { id: 1, title: 'Frontend Developer', location: 'HCMC', status: 'active' },
    { id: 2, title: 'Backend Engineer', location: 'Remote', status: 'active' },
    { id: 3, title: 'UI/UX Designer', location: 'Hanoi', status: 'draft' },
  ]);

  const handleEdit = (id: number) => {
    // TODO: Implement edit functionality
    alert(`Chỉnh sửa tin tuyển dụng ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    if (confirm('Bạn có chắc chắn muốn xóa tin tuyển dụng này?')) {
      setMockCareers(mockCareers.filter(c => c.id !== id));
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Quản lý Careers / Recruitments</h2>
            <p className="mt-1 text-sm text-gray-600">Thêm/Sửa tin tuyển dụng với biểu mẫu song ngữ tự động dịch.</p>
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-blue-700">
            <MdAdd size={18} />
            Tạo Mới
          </button>
        </div>

        {/* Form Section */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Thông Tin Tuyển Dụng</h3>
          
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Tiêu đề vị trí</label>
              <input
                className="w-full rounded-lg border border-gray-300 p-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="VD: Frontend Developer"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Địa điểm làm việc</label>
              <input
                className="w-full rounded-lg border border-gray-300 p-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="VD: HCMC / Hanoi / Remote"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Mô tả chi tiết</label>
              <textarea
                className="min-h-36 w-full resize-y rounded-lg border border-gray-300 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Mô tả công việc"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Mức lương</label>
                <input className="w-full rounded-lg border border-gray-300 p-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" placeholder="VD: 15-20 triệu" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Loại hình</label>
                <select className="w-full rounded-lg border border-gray-300 p-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Remote</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-3">
            <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">Lưu Nháp</button>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">Xuất Bản</button>
          </div>
        </div>

        {/* List Section */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 p-4">
            <h3 className="text-lg font-semibold text-gray-900">Danh Sách Tin Tuyển Dụng</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {mockCareers.map((career) => (
              <div key={career.id} className="flex items-center justify-between p-4 transition hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <MdVisibility size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{career.title}</p>
                    <p className="text-xs text-gray-600">{career.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${career.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                    {career.status === 'active' ? 'Đang hiển thị' : 'Nháp'}
                  </span>
                  <button 
                    onClick={() => handleEdit(career.id)}
                    className="rounded-lg border border-gray-200 p-2 text-gray-600 transition hover:bg-gray-100"
                    title="Sửa"
                  >
                    <MdEdit size={16} />
                  </button>
                  <button 
                    onClick={() => handleDelete(career.id)}
                    className="rounded-lg border border-gray-200 p-2 text-red-600 transition hover:bg-red-50"
                    title="Xóa"
                  >
                    <MdDelete size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
