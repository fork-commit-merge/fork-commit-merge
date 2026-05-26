<?php if (isset($component)) { $__componentOriginalbbd4eeea836234825f7514ed20d2d52d = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalbbd4eeea836234825f7514ed20d2d52d = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.layout','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::layout'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
    <?php if (isset($component)) { $__componentOriginal1e2fb8a385bff5b6574eeb687cee100b = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.section-container','data' => ['class' => 'px-6 py-0 sm:py-0']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::section-container'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'px-6 py-0 sm:py-0']); ?>
        <?php if (isset($component)) { $__componentOriginal6769184c81828596613858780a973bc6 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal6769184c81828596613858780a973bc6 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.topbar','data' => ['title' => $exception->title(),'markdown' => $exceptionAsMarkdown]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::topbar'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['title' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($exception->title()),'markdown' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($exceptionAsMarkdown)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal6769184c81828596613858780a973bc6)): ?>
<?php $attributes = $__attributesOriginal6769184c81828596613858780a973bc6; ?>
<?php unset($__attributesOriginal6769184c81828596613858780a973bc6); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal6769184c81828596613858780a973bc6)): ?>
<?php $component = $__componentOriginal6769184c81828596613858780a973bc6; ?>
<?php unset($__componentOriginal6769184c81828596613858780a973bc6); ?>
<?php endif; ?>
     <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b)): ?>
<?php $attributes = $__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b; ?>
<?php unset($__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal1e2fb8a385bff5b6574eeb687cee100b)): ?>
<?php $component = $__componentOriginal1e2fb8a385bff5b6574eeb687cee100b; ?>
<?php unset($__componentOriginal1e2fb8a385bff5b6574eeb687cee100b); ?>
<?php endif; ?>

    <?php if (isset($component)) { $__componentOriginal40a3de7997c05e5562c4104d90e9b634 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal40a3de7997c05e5562c4104d90e9b634 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.separator','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::separator'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal40a3de7997c05e5562c4104d90e9b634)): ?>
<?php $attributes = $__attributesOriginal40a3de7997c05e5562c4104d90e9b634; ?>
<?php unset($__attributesOriginal40a3de7997c05e5562c4104d90e9b634); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal40a3de7997c05e5562c4104d90e9b634)): ?>
<?php $component = $__componentOriginal40a3de7997c05e5562c4104d90e9b634; ?>
<?php unset($__componentOriginal40a3de7997c05e5562c4104d90e9b634); ?>
<?php endif; ?>

    <?php if (isset($component)) { $__componentOriginal1e2fb8a385bff5b6574eeb687cee100b = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.section-container','data' => ['class' => 'flex flex-col gap-8 py-0 sm:py-0']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::section-container'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'flex flex-col gap-8 py-0 sm:py-0']); ?>
        <?php if (isset($component)) { $__componentOriginal1e817eb3c41fe3ea9eb0c15213c4b557 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal1e817eb3c41fe3ea9eb0c15213c4b557 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.header','data' => ['exception' => $exception]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::header'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['exception' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($exception)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal1e817eb3c41fe3ea9eb0c15213c4b557)): ?>
<?php $attributes = $__attributesOriginal1e817eb3c41fe3ea9eb0c15213c4b557; ?>
<?php unset($__attributesOriginal1e817eb3c41fe3ea9eb0c15213c4b557); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal1e817eb3c41fe3ea9eb0c15213c4b557)): ?>
<?php $component = $__componentOriginal1e817eb3c41fe3ea9eb0c15213c4b557; ?>
<?php unset($__componentOriginal1e817eb3c41fe3ea9eb0c15213c4b557); ?>
<?php endif; ?>
     <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b)): ?>
<?php $attributes = $__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b; ?>
<?php unset($__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal1e2fb8a385bff5b6574eeb687cee100b)): ?>
<?php $component = $__componentOriginal1e2fb8a385bff5b6574eeb687cee100b; ?>
<?php unset($__componentOriginal1e2fb8a385bff5b6574eeb687cee100b); ?>
<?php endif; ?>

    <?php if (isset($component)) { $__componentOriginal40a3de7997c05e5562c4104d90e9b634 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal40a3de7997c05e5562c4104d90e9b634 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.separator','data' => ['class' => '-mt-5 -z-10']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::separator'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => '-mt-5 -z-10']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal40a3de7997c05e5562c4104d90e9b634)): ?>
<?php $attributes = $__attributesOriginal40a3de7997c05e5562c4104d90e9b634; ?>
<?php unset($__attributesOriginal40a3de7997c05e5562c4104d90e9b634); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal40a3de7997c05e5562c4104d90e9b634)): ?>
<?php $component = $__componentOriginal40a3de7997c05e5562c4104d90e9b634; ?>
<?php unset($__componentOriginal40a3de7997c05e5562c4104d90e9b634); ?>
<?php endif; ?>

    <?php if (isset($component)) { $__componentOriginal1e2fb8a385bff5b6574eeb687cee100b = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.section-container','data' => ['class' => 'flex flex-col gap-8 pt-14']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::section-container'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'flex flex-col gap-8 pt-14']); ?>
        <?php if (isset($component)) { $__componentOriginal92c1a431b4816bac5d5a20d0fc1238ab = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal92c1a431b4816bac5d5a20d0fc1238ab = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.trace','data' => ['exception' => $exception]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::trace'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['exception' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($exception)]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal92c1a431b4816bac5d5a20d0fc1238ab)): ?>
<?php $attributes = $__attributesOriginal92c1a431b4816bac5d5a20d0fc1238ab; ?>
<?php unset($__attributesOriginal92c1a431b4816bac5d5a20d0fc1238ab); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal92c1a431b4816bac5d5a20d0fc1238ab)): ?>
<?php $component = $__componentOriginal92c1a431b4816bac5d5a20d0fc1238ab; ?>
<?php unset($__componentOriginal92c1a431b4816bac5d5a20d0fc1238ab); ?>
<?php endif; ?>

        <?php if (isset($component)) { $__componentOriginalb73d2d8821ad40718c243f895ec0c546 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalb73d2d8821ad40718c243f895ec0c546 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.query','data' => ['queries' => $exception->applicationQueries()]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::query'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['queries' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($exception->applicationQueries())]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalb73d2d8821ad40718c243f895ec0c546)): ?>
<?php $attributes = $__attributesOriginalb73d2d8821ad40718c243f895ec0c546; ?>
<?php unset($__attributesOriginalb73d2d8821ad40718c243f895ec0c546); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalb73d2d8821ad40718c243f895ec0c546)): ?>
<?php $component = $__componentOriginalb73d2d8821ad40718c243f895ec0c546; ?>
<?php unset($__componentOriginalb73d2d8821ad40718c243f895ec0c546); ?>
<?php endif; ?>
     <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b)): ?>
<?php $attributes = $__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b; ?>
<?php unset($__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal1e2fb8a385bff5b6574eeb687cee100b)): ?>
<?php $component = $__componentOriginal1e2fb8a385bff5b6574eeb687cee100b; ?>
<?php unset($__componentOriginal1e2fb8a385bff5b6574eeb687cee100b); ?>
<?php endif; ?>

    <?php if (isset($component)) { $__componentOriginal40a3de7997c05e5562c4104d90e9b634 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal40a3de7997c05e5562c4104d90e9b634 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.separator','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::separator'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal40a3de7997c05e5562c4104d90e9b634)): ?>
<?php $attributes = $__attributesOriginal40a3de7997c05e5562c4104d90e9b634; ?>
<?php unset($__attributesOriginal40a3de7997c05e5562c4104d90e9b634); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal40a3de7997c05e5562c4104d90e9b634)): ?>
<?php $component = $__componentOriginal40a3de7997c05e5562c4104d90e9b634; ?>
<?php unset($__componentOriginal40a3de7997c05e5562c4104d90e9b634); ?>
<?php endif; ?>

    <?php if (isset($component)) { $__componentOriginal1e2fb8a385bff5b6574eeb687cee100b = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.section-container','data' => ['class' => 'flex flex-col gap-12']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::section-container'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'flex flex-col gap-12']); ?>
        <?php if (isset($component)) { $__componentOriginalcc330c991c1b19cde28fea414de1b6cb = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalcc330c991c1b19cde28fea414de1b6cb = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.request-header','data' => ['headers' => $exception->requestHeaders()]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::request-header'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['headers' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($exception->requestHeaders())]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalcc330c991c1b19cde28fea414de1b6cb)): ?>
<?php $attributes = $__attributesOriginalcc330c991c1b19cde28fea414de1b6cb; ?>
<?php unset($__attributesOriginalcc330c991c1b19cde28fea414de1b6cb); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalcc330c991c1b19cde28fea414de1b6cb)): ?>
<?php $component = $__componentOriginalcc330c991c1b19cde28fea414de1b6cb; ?>
<?php unset($__componentOriginalcc330c991c1b19cde28fea414de1b6cb); ?>
<?php endif; ?>

        <?php if (isset($component)) { $__componentOriginal3ce7d5064193f9b8bde76eb6792e715a = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal3ce7d5064193f9b8bde76eb6792e715a = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.request-body','data' => ['body' => $exception->requestBody()]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::request-body'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['body' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($exception->requestBody())]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal3ce7d5064193f9b8bde76eb6792e715a)): ?>
<?php $attributes = $__attributesOriginal3ce7d5064193f9b8bde76eb6792e715a; ?>
<?php unset($__attributesOriginal3ce7d5064193f9b8bde76eb6792e715a); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal3ce7d5064193f9b8bde76eb6792e715a)): ?>
<?php $component = $__componentOriginal3ce7d5064193f9b8bde76eb6792e715a; ?>
<?php unset($__componentOriginal3ce7d5064193f9b8bde76eb6792e715a); ?>
<?php endif; ?>

        <?php if (isset($component)) { $__componentOriginal40aab92597234e6686a03fbf91514afb = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal40aab92597234e6686a03fbf91514afb = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.routing','data' => ['routing' => $exception->applicationRouteContext()]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::routing'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['routing' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($exception->applicationRouteContext())]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal40aab92597234e6686a03fbf91514afb)): ?>
<?php $attributes = $__attributesOriginal40aab92597234e6686a03fbf91514afb; ?>
<?php unset($__attributesOriginal40aab92597234e6686a03fbf91514afb); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal40aab92597234e6686a03fbf91514afb)): ?>
<?php $component = $__componentOriginal40aab92597234e6686a03fbf91514afb; ?>
<?php unset($__componentOriginal40aab92597234e6686a03fbf91514afb); ?>
<?php endif; ?>

        <?php if (isset($component)) { $__componentOriginal982e77712eb0069b2ae32176000f422d = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal982e77712eb0069b2ae32176000f422d = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.routing-parameter','data' => ['routeParameters' => $exception->applicationRouteParametersContext()]] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::routing-parameter'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['routeParameters' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($exception->applicationRouteParametersContext())]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal982e77712eb0069b2ae32176000f422d)): ?>
<?php $attributes = $__attributesOriginal982e77712eb0069b2ae32176000f422d; ?>
<?php unset($__attributesOriginal982e77712eb0069b2ae32176000f422d); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal982e77712eb0069b2ae32176000f422d)): ?>
<?php $component = $__componentOriginal982e77712eb0069b2ae32176000f422d; ?>
<?php unset($__componentOriginal982e77712eb0069b2ae32176000f422d); ?>
<?php endif; ?>
     <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b)): ?>
<?php $attributes = $__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b; ?>
<?php unset($__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal1e2fb8a385bff5b6574eeb687cee100b)): ?>
<?php $component = $__componentOriginal1e2fb8a385bff5b6574eeb687cee100b; ?>
<?php unset($__componentOriginal1e2fb8a385bff5b6574eeb687cee100b); ?>
<?php endif; ?>

    <?php if (isset($component)) { $__componentOriginal40a3de7997c05e5562c4104d90e9b634 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal40a3de7997c05e5562c4104d90e9b634 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.separator','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::separator'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal40a3de7997c05e5562c4104d90e9b634)): ?>
<?php $attributes = $__attributesOriginal40a3de7997c05e5562c4104d90e9b634; ?>
<?php unset($__attributesOriginal40a3de7997c05e5562c4104d90e9b634); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal40a3de7997c05e5562c4104d90e9b634)): ?>
<?php $component = $__componentOriginal40a3de7997c05e5562c4104d90e9b634; ?>
<?php unset($__componentOriginal40a3de7997c05e5562c4104d90e9b634); ?>
<?php endif; ?>

    <?php if(! app()->runningUnitTests() && ! app()->runningInConsole()): ?>
        <?php if (isset($component)) { $__componentOriginal1e2fb8a385bff5b6574eeb687cee100b = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.section-container','data' => ['class' => 'pb-0 sm:pb-0']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::section-container'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'pb-0 sm:pb-0']); ?>
            <?php if (isset($component)) { $__componentOriginal00da9961ee0aae6b56664f2b481f9f2e = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal00da9961ee0aae6b56664f2b481f9f2e = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.laravel-ascii-spotlight','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::laravel-ascii-spotlight'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal00da9961ee0aae6b56664f2b481f9f2e)): ?>
<?php $attributes = $__attributesOriginal00da9961ee0aae6b56664f2b481f9f2e; ?>
<?php unset($__attributesOriginal00da9961ee0aae6b56664f2b481f9f2e); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal00da9961ee0aae6b56664f2b481f9f2e)): ?>
<?php $component = $__componentOriginal00da9961ee0aae6b56664f2b481f9f2e; ?>
<?php unset($__componentOriginal00da9961ee0aae6b56664f2b481f9f2e); ?>
<?php endif; ?>
         <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b)): ?>
<?php $attributes = $__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b; ?>
<?php unset($__attributesOriginal1e2fb8a385bff5b6574eeb687cee100b); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal1e2fb8a385bff5b6574eeb687cee100b)): ?>
<?php $component = $__componentOriginal1e2fb8a385bff5b6574eeb687cee100b; ?>
<?php unset($__componentOriginal1e2fb8a385bff5b6574eeb687cee100b); ?>
<?php endif; ?>
    <?php endif; ?>
 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalbbd4eeea836234825f7514ed20d2d52d)): ?>
<?php $attributes = $__attributesOriginalbbd4eeea836234825f7514ed20d2d52d; ?>
<?php unset($__attributesOriginalbbd4eeea836234825f7514ed20d2d52d); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalbbd4eeea836234825f7514ed20d2d52d)): ?>
<?php $component = $__componentOriginalbbd4eeea836234825f7514ed20d2d52d; ?>
<?php unset($__componentOriginalbbd4eeea836234825f7514ed20d2d52d); ?>
<?php endif; ?>
<?php /**PATH /home/salvador/Formacion/GitHub/fork-commit-merge/tasks/laravel/easy/greeting-project/vendor/laravel/framework/src/Illuminate/Foundation/Providers/../resources/exceptions/renderer/show.blade.php ENDPATH**/ ?>