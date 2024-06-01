#pragma once

#include "App.xaml.g.h"

#include <CppWinRTIncludes.h>
#include <winrt/Windows.UI.ViewManagement.h>

namespace activation = winrt::Windows::ApplicationModel::Activation;

namespace winrt::jetstream_mailer::implementation
{
    struct App : AppT<App>
    {
        App() noexcept;
        // void OnLaunched(activation::LaunchActivatedEventArgs const&);
        void OnLaunched(const Windows::ApplicationModel::Activation::LaunchActivatedEventArgs& e);
        void OnActivated(Windows::ApplicationModel::Activation::IActivatedEventArgs const &e);
        void OnSuspending(IInspectable const&, Windows::ApplicationModel::SuspendingEventArgs const&);
        void OnNavigationFailed(IInspectable const&, xaml::Navigation::NavigationFailedEventArgs const&);
      private:
        using super = AppT<App>;
    };
} // namespace winrt::jetstream_mailer::implementation
