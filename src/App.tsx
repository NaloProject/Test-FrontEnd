import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { Outlet } from "react-router-dom"
import { Message } from "./components/alert/Message"
import { Icon } from "./components/image/Icon"
import { Content } from "./components/layout/Content"
import { Page } from "./components/layout/Page"
import { PageLoader } from "./components/layout/PageLoader"
import { useFetchData } from "./lib/api"
import { useResetScrollOnNavigation } from "./lib/app"

export function App() {
  useResetScrollOnNavigation()

  const { ready, error } = useFetchData()

  function reloadApp() {
    window.location.reload()
  }

  if (!ready) {
    return (
      <Page>
        <Content>
          {error ? (
            <Message
              action={<Icon icon={ArrowPathIcon} onClick={reloadApp} />}
              error
            >
              Something went wrong while fetching data. Please refresh the page.
            </Message>
          ) : (
            <PageLoader />
          )}
        </Content>
      </Page>
    )
  }

  return <Outlet />
}
