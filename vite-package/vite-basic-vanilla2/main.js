const modules = import.meta.glob('./glob/*[1].js');

Object.entries(modules).forEach(([key, value]) => {
  value().then((module) => {
    console.log(key, module.default);
  });
});
