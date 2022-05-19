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
                            <a-select-option value="1">lucy</a-select-option>
                            <a-select-option value="2">2</a-select-option>
                            <a-select-option value="3">3</a-select-option>
                        </a-select>
                    </a-form-item>

                    <a-form-item label='状态'>
                        <a-select v-model:value="formsearch.role" style="width: 120px">
                            <a-select-option value="1">禁用</a-select-option>
                            <a-select-option value="2">启用</a-select-option>
                        </a-select>
                    </a-form-item>

                    <a-form-item label='关键字'>
                        <a-select v-model:value="formsearch.role" style="width: 120px">
                            <a-select-option value="1">1</a-select-option>
                            <a-select-option value="2">2</a-select-option>
                            <a-select-option value="3">3</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item>
                        <a-input v-model:value="formsearch.role" placeholder="请输入关键字" />
                    </a-form-item>
                    <a-form-item>
                        <a-button type="primary">搜索</a-button>
                        <a-button type="primary">重置</a-button>
                        <a-button type="primary">导出</a-button>
                        <a-button type="primary" @click="deleFormcode">删除</a-button>
                    </a-form-item>
                </a-form>
           </a-col>
           <a-col flex="100px">
               <a-button type="primary" @click="showAddModal">新增用户</a-button>
           </a-col>
       </a-row>

       <user-modal v-model:visible="visibleModal" v-model:id="rowId" ></user-modal>

        <!-- 表格数据 -->
        <a-table 
            :row-selection="{ selectedRowKeys: datalayout.selectedRowKeys, onChange: onSelectChange }"  
            :columns="datalayout.columns" 
            :data-source="datalayout.dataSource" 
            bordered 
            :pagination="false"
        >
            <template #status="{ text,record }">
                <a-switch :checked="!!text" @change='handleswitch(record)'/>
            </template>

            <template #control = "{record}" class="control_button">
                <a-button type="primary" @click="showEditModal(record)">编辑</a-button>
                <a-button type="primary" danger>删除</a-button>
                <a-button type="default">详情</a-button>
            </template>
        </a-table>
        <a-config-provider :locale="locale">
            <a-pagination
                v-model:current="current"
                v-model:page-size="pageSize"
                show-quick-jumper
                :page-size-options="pageSizeOptions"
                :total="total"
                show-size-changer
                @showSizeChange="onShowSizeChange"
            >
                <template #buildOptionText="props">
                <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
                <span v-else>全部</span>
                </template>
            </a-pagination>
        </a-config-provider>
     </a-card>
</template>

<script>
import { reactive ,ref } from "@vue/reactivity";
import UserModal from "@/components/Modal/UserModal.vue"
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'

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
                    id:'1',
                    name: 'John Brown',
                    age: 32,
                    address: 'London No. 1 Lake Park',
                    status:0
                }, {
                    id:'2',
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    status:1
                }],
            selectedRowKeys: [],
        })
        
        let visibleModal = ref(false)
        let rowId = ref(null)
        const locale = zhCN

        const checked = ref(false)
        const title=ref('')

        const pageSizeOptions = ref(['10', '20', '30', '40', '50']);
        const current = ref(1);
        const pageSizeRef = ref(10);
        const total = ref(50);

        const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
        pageSizeRef.value = pageSize;
        };

        // 搜索框数据
        const formsearch = reactive({
            role:'',
            status:'',
            keywords:'',
            inputKeyWords:'',
            title,
        })

        const onSelectChange = selectedRowKeys => {
            datalayout.selectedRowKeys = selectedRowKeys;
            };

        const onChange = pageNumber => {
            console.log('Page: ', pageNumber);
            };

        const handleswitch = (data) => {
            console.log('switch',data);
            data.status = !data.status
        }

        const showAddModal = () =>{
            visibleModal.value = true
            title.value='新增用户'
            console.log('新增用户',title.value)
        }

        const showEditModal = (recores)=>{
            visibleModal.value = true
            rowId.value = recores.id
            console.log('编辑',recores)
        }

        const deleFormcode = () => {
            for(let k in formsearch){
                 console.log('搜索框字段：',formsearch[k])
            }
            delete formsearch.role
            for(let k in formsearch){
                 console.log('搜索删除后框字段：',formsearch[k])
            }
        }

        return{
            datalayout,
            formsearch,
            visibleModal,
            checked,
            rowId,
            onSelectChange,
            showAddModal,
            showEditModal,
            handleswitch,
            deleFormcode,
            current,
            onChange,
            total,
            pageSizeOptions,
            onShowSizeChange,
            locale
            }
        },   
    }
</script>

<style scoped>
.ant-btn {
    margin-right: 8px !important;
}
</style>
