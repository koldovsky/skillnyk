import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
 
export function SwitchSkillLevel() {
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="switch-skill-level">По скілах</Label>
      <Switch id="switch-skill-level" />
      <Label htmlFor="switch-skill-level">По рівнях</Label>
    </div>
  )
}