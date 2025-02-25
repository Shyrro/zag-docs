import * as menu from "@zag-js/menu"
import { normalizeProps, useMachine, Portal } from "@zag-js/react"
import { chakra } from "@chakra-ui/system"
import { Button } from "components/button"
import { useId } from "react"

const data = [
  { label: "Edit", value: "edit" },
  { label: "Delete", value: "delete" },
  { label: "Export", value: "export" },
  { label: "Duplicate", value: "duplicate" },
]

export function ContextMenu(props) {
  const [state, send] = useMachine(menu.machine({ id: useId() }), {
    context: props.controls,
  })

  const api = menu.connect(state, send, normalizeProps)

  return (
    <div>
      <chakra.div bg="blackAlpha.200" p="4" {...api.contextTriggerProps}>
        <div>Open context menu</div>
      </chakra.div>
      <div {...api.positionerProps}>
        <chakra.ul
          bg="white"
          width="240px"
          padding="2"
          isolation="isolate"
          listStyleType="none"
          shadow="base"
          className="focus-outline"
          {...api.contentProps}
        >
          {data.map((item) => (
            <chakra.li
              px="2"
              py="1"
              cursor="pointer"
              key={item.value}
              _focus={{ bg: "green.200" }}
              {...api.getItemProps({ id: item.value })}
            >
              {item.label}
            </chakra.li>
          ))}
        </chakra.ul>
      </div>
    </div>
  )
}
