export const handleCopyToClipboard = () => {
    navigator.clipboard.writeText('Medranoector@yahoo.com');
    toast('Toast is good', {
      hideProgressBar: true,
      autoClose: 2000,
      type: 'success'
    });
};