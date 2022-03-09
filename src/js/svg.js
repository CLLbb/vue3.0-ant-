//获取当前svg目录所有为.svg结尾的文件
const req = require.context('../assets/svg',false,/\.svg$/);//第二个参数：是否查找子目录的文件，即../../assets/svg目录下的子目录
const requireAll = (requireContext) => {
    return requireContext.keys().map(requireContext);
};
requireAll(require.context('../assets/svg',false,/\.svg$/));