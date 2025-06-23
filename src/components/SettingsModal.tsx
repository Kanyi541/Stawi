import React, { useState } from 'react';
import { X, Moon, Sun, Globe, Bell, Shield, Palette, Database } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    theme: 'dark',
    currency: 'USD',
    notifications: true,
    autoRefresh: true,
    language: 'en',
    privacy: 'standard'
  });

  if (!isOpen) return null;

  const tabs = [
    { id: 'general', label: 'General', icon: Globe },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'data', label: 'Data', icon: Database }
  ];

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">Default Currency</label>
              <select
                value={settings.currency}
                onChange={(e) => updateSetting('currency', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="CAD">CAD - Canadian Dollar</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Language</label>
              <select
                value={settings.language}
                onChange={(e) => updateSetting('language', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="zh">中文</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Auto Refresh</h4>
                <p className="text-gray-400 text-sm">Automatically refresh prices and data</p>
              </div>
              <button
                onClick={() => updateSetting('autoRefresh', !settings.autoRefresh)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.autoRefresh ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.autoRefresh ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-3">Theme</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => updateSetting('theme', 'dark')}
                  className={`p-4 border rounded-xl transition-all ${
                    settings.theme === 'dark'
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <Moon className="w-6 h-6 text-white mx-auto mb-2" />
                  <span className="text-white text-sm">Dark</span>
                </button>
                <button
                  onClick={() => updateSetting('theme', 'light')}
                  className={`p-4 border rounded-xl transition-all ${
                    settings.theme === 'light'
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <Sun className="w-6 h-6 text-white mx-auto mb-2" />
                  <span className="text-white text-sm">Light</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Chart Style</label>
              <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500">
                <option value="line">Line Chart</option>
                <option value="candle">Candlestick</option>
                <option value="area">Area Chart</option>
              </select>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Push Notifications</h4>
                <p className="text-gray-400 text-sm">Receive notifications for important updates</p>
              </div>
              <button
                onClick={() => updateSetting('notifications', !settings.notifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.notifications ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-medium">Notification Types</h4>
              {[
                'Price Alerts',
                'Transaction Updates',
                'Market News',
                'Portfolio Changes',
                'Security Alerts'
              ].map((type) => (
                <div key={type} className="flex items-center justify-between">
                  <span className="text-gray-300">{type}</span>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-medium mb-3">Privacy Level</h4>
              <div className="space-y-3">
                {[
                  { id: 'minimal', label: 'Minimal', desc: 'Basic functionality only' },
                  { id: 'standard', label: 'Standard', desc: 'Balanced privacy and features' },
                  { id: 'enhanced', label: 'Enhanced', desc: 'Maximum privacy protection' }
                ].map((level) => (
                  <button
                    key={level.id}
                    onClick={() => updateSetting('privacy', level.id)}
                    className={`w-full p-3 border rounded-lg text-left transition-all ${
                      settings.privacy === level.id
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <div className="text-white font-medium">{level.label}</div>
                    <div className="text-gray-400 text-sm">{level.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-red-500/20 border border-red-500/30 text-red-400 py-3 px-4 rounded-lg hover:bg-red-500/30 transition-all">
                Clear All Data
              </button>
              <button className="w-full bg-gray-700 border border-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-600 transition-all">
                Export Data
              </button>
            </div>
          </div>
        );

      case 'data':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-medium mb-3">Data Sources</h4>
              <div className="space-y-3">
                {[
                  'CoinGecko API',
                  'CoinMarketCap',
                  'Binance API',
                  'Ethereum Network'
                ].map((source) => (
                  <div key={source} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                    <span className="text-white">{source}</span>
                    <span className="text-green-400 text-sm">Connected</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Cache Settings</h4>
              <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-all">
                Clear Cache
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Settings</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex h-[600px]">
          {/* Sidebar */}
          <div className="w-64 bg-gray-900/50 border-r border-gray-700 p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {renderTabContent()}
          </div>
        </div>

        <div className="p-6 border-t border-gray-700 bg-gray-900/50">
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;