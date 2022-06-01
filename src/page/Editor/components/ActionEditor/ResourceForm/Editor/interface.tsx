import { ActionType } from "../interface"
import { ResourceType } from "@/page/Editor/components/ActionEditor/interface"

export type ConnectionRef = {
  testConnection: () => void
}

export interface ResourceFormEditorProps {
  actionType: ActionType
  resourceId?: string
  resourceType?: ResourceType
  back?: () => void
  onSubmit?: () => void
}