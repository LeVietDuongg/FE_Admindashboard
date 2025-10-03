'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/Input';
import {
  MdSearch,
  MdNotifications,
  MdMessage,
  MdCalendarToday,
  MdShoppingCart,
  MdMenu,
  MdKeyboardArrowDown,
} from 'react-icons/md';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
     <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-2 sm:px-4 lg:px-6">
      {/* Left section */}
      <div className="flex items-center space-x-2 sm:space-x-4 min-w-0">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden rounded-lg p-1 sm:p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <MdMenu size={18} className="sm:hidden" />
          <MdMenu size={20} className="hidden sm:inline" />
        </button>
        {/* Page title */}
        <div className="min-w-0">
          <h1 className="truncate text-base sm:text-xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500 hidden sm:block">
            Hi, Samantha. Welcome back to Supa Admin!
          </p>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Search bar (desktop) */}
        <div className="relative hidden md:block">
          <MdSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 pl-10"
          />
        </div>

        {/* Notification icons */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {/* Search icon for mobile */}
          <button className="md:hidden rounded-lg p-1 sm:p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <MdSearch size={18} className="sm:hidden" />
            <MdSearch size={20} className="hidden sm:inline" />
          </button>

          {/* Notification bell */}
          <div className="relative">
            <button className="rounded-lg p-1 sm:p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <MdNotifications size={18} className="sm:hidden" />
              <MdNotifications size={20} className="hidden sm:inline" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] sm:text-xs font-medium text-white">
                3
              </span>
            </button>
          </div>

          {/* Messages */}
          <div className="relative">
            <button className="rounded-lg p-1 sm:p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <MdMessage size={18} className="sm:hidden" />
              <MdMessage size={20} className="hidden sm:inline" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] sm:text-xs font-medium text-white">
                5
              </span>
            </button>
          </div>

          {/* Calendar */}
          <button className="rounded-lg p-1 sm:p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <MdCalendarToday size={18} className="sm:hidden" />
            <MdCalendarToday size={20} className="hidden sm:inline" />
          </button>

          {/* Shopping cart */}
          <div className="relative">
            <button className="rounded-lg p-1 sm:p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <MdShoppingCart size={18} className="sm:hidden" />
              <MdShoppingCart size={20} className="hidden sm:inline" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-red-600 text-[10px] sm:text-xs font-medium text-white">
                2
              </span>
            </button>
          </div>
        </div>

        {/* User profile */}
        <div className="relative">
          <button className="flex items-center space-x-1 sm:space-x-3 rounded-lg p-1 sm:p-2 hover:bg-gray-50">
            <Image
              src="https://images.unsplash.com/photo-1494790108755-2616c2f3e9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="Profile"
              width={28}
              height={28}
              className="h-7 w-7 sm:h-8 sm:w-8 rounded-full object-cover"
            />
            <div className="hidden text-left sm:block">
              <p className="text-sm font-medium text-gray-900">Hello, Samantha</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
            <MdKeyboardArrowDown size={14} className="text-gray-400 sm:hidden" />
            <MdKeyboardArrowDown size={16} className="text-gray-400 hidden sm:inline" />
          </button>
        </div>
      </div>
    </header>
  );
}
