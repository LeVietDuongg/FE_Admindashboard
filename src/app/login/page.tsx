'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MdEmail, MdLock, MdSupport } from 'react-icons/md';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    // Placeholder: integrate with real auth later
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
            <span className="text-2xl font-bold text-white">D</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Đăng nhập</h1>
          <p className="mt-1 text-sm text-gray-600">DUDISOFTWARE Admin Dashboard</p>
        </div>

        {/* Login Form */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                <MdEmail size={16} className="text-gray-500" />
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                <MdLock size={16} className="text-gray-500" />
                Mật khẩu
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-md transition hover:from-blue-700 hover:to-indigo-700 disabled:opacity-60"
            >
              {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </button>
          </form>
        </div>

        {/* Support Section */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              <MdSupport size={18} />
            </div>
            <p className="font-semibold text-gray-900">Cần hỗ trợ?</p>
          </div>
          <p className="mb-3 text-sm text-gray-600">Liên hệ nhà cung cấp hệ thống:</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-gray-400">•</span>
              Email: <a className="text-blue-600 hover:underline" href="mailto:support@dudisoftware.com">support@dudisoftware.com</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-400">•</span>
              Zalo/Phone: <a className="text-blue-600 hover:underline" href="tel:+84000000000">+84 00 0000 000</a>
            </li>
          </ul>
        </div>

        {/* Back Link */}
        <div className="mt-4 text-center">
          <Link href="/" className="text-sm text-blue-600 transition hover:text-blue-700 hover:underline">
            ← Quay lại trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
