<template>
    <a-card>
        <!-- 查询区域 -->
       <a-row type="flex">
           <a-col flex="auto">
                <a-form
                    layout="inline"
                    :model="formsearch"
                    style="margin-bottom:20px"
                >
                    <a-form-item label='角色类型'>
                        <a-select v-model:value="formsearch.role" style="width: 120px">
                            <a-select-option value="lucy">lucy</a-select-option>
                            <a-select-option value="lucy">2</a-select-option>
                            <a-select-option value="lucy">3</a-select-option>
                        </a-select>
                    </a-form-item>

                    <a-form-item label='状态'>
                        <a-select v-model:value="formsearch.role" style="width: 120px">
                            <a-select-option value="lucy">禁用</a-select-option>
                            <a-select-option value="lucy">启用</a-select-option>
                        </a-select>
                    </a-form-item>

                    <a-form-item label='关键字'>
                        <a-select v-model:value="formsearch.role" style="width: 120px">
                            <a-select-option value="lucy">lucy</a-select-option>
                            <a-select-option value="lucy">2</a-select-option>
                            <a-select-option value="lucy">3</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item>
                        <a-input v-model:value="formsearch.role" placeholder="请输入关键字" />
                    </a-form-item>
                    <a-form-item>
                        <a-button type="primary">搜索</a-button>
                        <a-button type="primary">重置</a-button>
                        <a-button type="primary">导出</a-button>
                    </a-form-item>
                </a-form>
           </a-col>
           <a-col flex="100px">
               <a-button type="primary" @click="showAddModal">新增用户</a-button>
           </a-col>
       </a-row>

       <user-modal v-model:visible="visibleModal" v-model:title="title"></user-modal>

        <!-- 表格数据 -->
        <a-table :row-selection="{ selectedRowKeys: datalayout.selectedRowKeys, onChange: onSelectChange }"  :columns="datalayout.columns" :data-source="datalayout.dataSource" bordered>
            <template #status="{text}">
                <a-switch v-model:checked="checked" />
            </template>

            <template #control class="control_button">
                <a-button type="primary" @click="showEditModal">编辑</a-button>
                <a-button type="primary" danger>删除</a-button>
                <a-button type="default">详情</a-button>
            </template>
        </a-table>
     </a-card>
</template>

<script>
import { reactive ,ref } from "@vue/reactivity";
import UserModal from "@/components/Modal/UserModal.vue"

export default{
    components:{
        UserModal
    },
    setup() {
        const datalayout = reactive({
            columns:[{
                title: '姓名',
                key:'name',
                dataIndex: 'name',
                }, {
                title: '年龄',
                key:'age',
                dataIndex: 'age',
                }, {
                title: '地址',
                key:'address',
                dataIndex: 'address',
                }, {
                title: '状态（禁/启用）',
                dataIndex: 'status',
                key:'status',
                slots:{ customRender:'status' } //具名插槽
                }, {
                title: '操作',
                key:'control',
                dataIndex: 'control',
                slots:{ customRender:'control' }
                }],
            dataSource:[
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'London No. 1 Lake Park',
                    status:true
                }, {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    status:true
                }, {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    tel: '0575-22098909',
                    phone: 18900010002,
                    address: 'Sidney No. 1 Lake Park',
                }, {
                    key: '4',
                    name: 'Jim Red',
                    age: 18,
                    tel: '0575-22098909',
                    phone: 18900010002,
                    address: 'London No. 2 Lake Park',
                }, {
                    key: '5',
                    name: 'Jake White',
                    age: 18,
                    tel: '0575-22098909',
                    phone: 18900010002,
                    address: 'Dublin No. 2 Lake Park',
                    }
            ],
            selectedRowKeys: [],
        })
        
        let visibleModal = ref(false)

        const checked = ref(false)
        const title=ref('')

        // 搜索框数据
        const formsearch = reactive({
            role:'',
            status:'',
            keywords:'',
            inputKeyWords:'',
            title
        })

        const onSelectChange = selectedRowKeys => {
            datalayout.selectedRowKeys = selectedRowKeys;
            };

        const showAddModal = () =>{
            visibleModal.value = true
            title.value='新增用户'
            console.log('新增用户',title.value)
        }

        const showEditModal = ()=>{
            visibleModal.value = true
            title.value='编辑'
            console.log('编辑',title.value)
        }

        return{
            datalayout,
            formsearch,
            visibleModal,
            checked,
            onSelectChange,
            showAddModal,
            showEditModal
            }
        },   
    }
</script>

<style scoped>
.ant-btn {
    margin-right: 8px !important;
}
</style>
