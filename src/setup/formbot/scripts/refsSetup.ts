import { storeBot } from "@/stores/bot";
import type { selectCourts, TypeEnabledInputs } from "@/types/form_types";
import { storeToRefs } from "pinia";
import { reactive, ref } from "vue";

export default function () {
  const selected = ref(null);
  const queryCourt = ref("");
  const courtOptions = ref<selectCourts[]>([]);
  const overlayFormSubmit = ref(false);
  const { bot, form } = storeToRefs(storeBot());
  const EnabledInputs = reactive<TypeEnabledInputs>({
    xlsx: false,
    creds: false,
    parte_name: false,
    doc_parte: false,
    data_inicio: false,
    data_fim: false,
    polo_parte: false,
    state: false,
    varas: false,
    client: false,
    otherfiles: false,
    confirm_fields: false,
    periodic_task: false,
  });
  return { selected, queryCourt, courtOptions, overlayFormSubmit, bot, form, EnabledInputs };
}
