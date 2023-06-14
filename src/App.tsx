import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { Outlet } from "react-router-dom"
import styles from "./App.module.css"
import { Icon } from "./components/image/Icon"
import { Content } from "./components/layout/Content"
import { Page } from "./components/layout/Page"
import { Loader } from "./components/misc/Loader"
import { Text } from "./components/typography/Text"
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
            <div className={styles.error}>
              <Text>
                Something went wrong while fetching data. Please refresh the
                page.
              </Text>
              <Icon icon={ArrowPathIcon} onClick={reloadApp} />
            </div>
          ) : (
            <Loader className={styles.loader} />
          )}
        </Content>
      </Page>
    )
  }

  return <Outlet />
}
