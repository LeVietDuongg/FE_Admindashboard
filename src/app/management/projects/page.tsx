'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import { useState } from 'react';
import { MdAdd, MdEdit, MdDelete, MdFolder, MdUpload, MdImage } from 'react-icons/md';

interface Project {
  id: number;
  name: string;
  category: string;
  status: 'active' | 'draft';
  image?: string;
}

export default function ProjectsManagementPage() {
  const [projectName, setProjectName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const [projects, setProjects] = useState<Project[]>([
    { id: 1, name: 'Enterprise Management System', category: 'Web Application', status: 'active', image: '' },
    { id: 2, name: 'ERP Suite', category: 'Enterprise', status: 'active', image: '' },
    { id: 3, name: 'E-commerce Platform', category: 'Retail', status: 'active', image: '' },
    { id: 4, name: 'AI Insights', category: 'Data Science', status: 'draft', image: '' },
  ]);

  const handleEdit = (id: number) => {
    alert(`Chỉnh sửa dự án ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    if (confirm('Bạn có chắc chắn muốn xóa dự án này?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleImport = () => {
    alert('Chức năng import dự án từ file JSON/CSV');
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Quản lý Dự Án</h2>
            <p className="mt-1 text-sm text-gray-600">Thêm, sửa, xóa hoặc import dự án từ file.</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleImport}
              className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <MdUpload size={18} />
              Import
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-blue-700">
              <MdAdd size={18} />
              Tạo Mới
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Thông Tin Dự Án</h3>
          
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Tên dự án</label>
              <input
                className="w-full rounded-lg border border-gray-300 p-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="VD: ERP Suite"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Danh mục</label>
              <input
                className="w-full rounded-lg border border-gray-300 p-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="VD: Enterprise / Retail / Data Science"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Mô tả chi tiết</label>
              <textarea
                className="min-h-36 w-full resize-y rounded-lg border border-gray-300 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Mô tả dự án"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Công nghệ sử dụng</label>
                <input 
                  className="w-full rounded-lg border border-gray-300 p-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="VD: React, Node.js, AWS"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Trạng thái</label>
                <select className="w-full rounded-lg border border-gray-300 p-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="active">Công khai</option>
                  <option value="draft">Nháp</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Hình ảnh dự án</label>
              <div className="flex items-center gap-4">
                <button 
                  type="button"
                  className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  <MdImage size={18} />
                  Chọn ảnh
                </button>
                <span className="text-sm text-gray-500">Hoặc kéo thả ảnh vào đây</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-3">
            <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">Lưu Nháp</button>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">Xuất Bản</button>
          </div>
        </div>

        {/* Projects List */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 p-4">
            <h3 className="text-lg font-semibold text-gray-900">Danh Sách Dự Án</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {projects.map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 transition hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                    <MdFolder size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{project.name}</p>
                    <p className="text-xs text-gray-600">{project.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${project.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                    {project.status === 'active' ? 'Công khai' : 'Nháp'}
                  </span>
                  <button 
                    onClick={() => handleEdit(project.id)}
                    className="rounded-lg border border-gray-200 p-2 text-gray-600 transition hover:bg-gray-100"
                    title="Sửa"
                  >
                    <MdEdit size={16} />
                  </button>
                  <button 
                    onClick={() => handleDelete(project.id)}
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

        {/* Import Instructions */}
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
          <h4 className="mb-2 font-medium text-blue-900">Hướng dẫn Import Dự Án</h4>
          <ul className="list-inside list-disc space-y-1 text-sm text-blue-800">
            <li>Chuẩn bị file JSON hoặc CSV chứa thông tin dự án</li>
            <li>Format: {`{name, category, description, tech, status, image}`}</li>
            <li>Click nút "Import" để tải file lên hệ thống</li>
            <li>Hệ thống sẽ tự động thêm các dự án vào danh sách</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}

