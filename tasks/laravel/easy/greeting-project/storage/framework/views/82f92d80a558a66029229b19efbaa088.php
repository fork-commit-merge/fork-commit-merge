<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag;

$__newAttributes = [];
$__propNames = \Illuminate\View\ComponentAttributeBag::extractPropNames((['exception', 'request']));

foreach ($attributes->all() as $__key => $__value) {
    if (in_array($__key, $__propNames)) {
        $$__key = $$__key ?? $__value;
    } else {
        $__newAttributes[$__key] = $__value;
    }
}

$attributes = new \Illuminate\View\ComponentAttributeBag($__newAttributes);

unset($__propNames);
unset($__newAttributes);

foreach (array_filter((['exception', 'request']), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
}

$__defined_vars = get_defined_vars();

foreach ($attributes->all() as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
}

unset($__defined_vars, $__key, $__value); ?>

<div
    x-data="{
        copied: false,
        async copyToClipboard() {
            try {
                await window.copyToClipboard('<?php echo e($request->fullUrl()); ?>');
                this.copied = true;
                setTimeout(() => { this.copied = false }, 3000);
            } catch (err) {
                console.error('Failed to copy the requestURL: ', err);
            }
        }
    }"
    <?php echo e($attributes->merge(['class' => "bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-white/10 rounded-lg flex items-center justify-between h-10 px-2 shadow-xs"])); ?>

>
    <div class="flex items-center gap-3 w-full">
        <?php if (isset($component)) { $__componentOriginal0bc865510ef3ecddbe48edc4e8cc9ddb = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal0bc865510ef3ecddbe48edc4e8cc9ddb = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.badge','data' => ['type' => 'error','variant' => 'solid']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::badge'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['type' => 'error','variant' => 'solid']); ?>
            <?php if (isset($component)) { $__componentOriginalebc8ec9a834a8051f56913d6745a7050 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalebc8ec9a834a8051f56913d6745a7050 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.alert','data' => ['class' => 'w-2.5 h-2.5']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.alert'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'w-2.5 h-2.5']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalebc8ec9a834a8051f56913d6745a7050)): ?>
<?php $attributes = $__attributesOriginalebc8ec9a834a8051f56913d6745a7050; ?>
<?php unset($__attributesOriginalebc8ec9a834a8051f56913d6745a7050); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalebc8ec9a834a8051f56913d6745a7050)): ?>
<?php $component = $__componentOriginalebc8ec9a834a8051f56913d6745a7050; ?>
<?php unset($__componentOriginalebc8ec9a834a8051f56913d6745a7050); ?>
<?php endif; ?>
            <?php echo e($exception->httpStatusCode()); ?>

         <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal0bc865510ef3ecddbe48edc4e8cc9ddb)): ?>
<?php $attributes = $__attributesOriginal0bc865510ef3ecddbe48edc4e8cc9ddb; ?>
<?php unset($__attributesOriginal0bc865510ef3ecddbe48edc4e8cc9ddb); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal0bc865510ef3ecddbe48edc4e8cc9ddb)): ?>
<?php $component = $__componentOriginal0bc865510ef3ecddbe48edc4e8cc9ddb; ?>
<?php unset($__componentOriginal0bc865510ef3ecddbe48edc4e8cc9ddb); ?>
<?php endif; ?>
        <?php if (isset($component)) { $__componentOriginal5131cdd8ffd44ce9fe7ed2c3030dd413 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal5131cdd8ffd44ce9fe7ed2c3030dd413 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.http-method','data' => ['method' => ''.e($request->method()).'']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::http-method'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['method' => ''.e($request->method()).'']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal5131cdd8ffd44ce9fe7ed2c3030dd413)): ?>
<?php $attributes = $__attributesOriginal5131cdd8ffd44ce9fe7ed2c3030dd413; ?>
<?php unset($__attributesOriginal5131cdd8ffd44ce9fe7ed2c3030dd413); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal5131cdd8ffd44ce9fe7ed2c3030dd413)): ?>
<?php $component = $__componentOriginal5131cdd8ffd44ce9fe7ed2c3030dd413; ?>
<?php unset($__componentOriginal5131cdd8ffd44ce9fe7ed2c3030dd413); ?>
<?php endif; ?>
        <div class="flex-1 text-sm font-light truncate text-neutral-950 dark:text-white">
            <span data-tippy-content="<?php echo e($request->fullUrl()); ?>">
                <?php echo e($request->fullUrl()); ?>

            </span>
        </div>
        <button
            x-cloak
            @click="copyToClipboard()"
            class="<?php echo \Illuminate\Support\Arr::toCssClasses([
                "rounded-md w-6 h-6 flex flex-shrink-0 items-center justify-center cursor-pointer border transition-colors duration-200 ease-in-out",
                "bg-white/5 border-neutral-200 hover:bg-neutral-100 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10",
            ]); ?>"
        >
            <?php if (isset($component)) { $__componentOriginal8894ff2e6e6bd543865d608162806b35 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal8894ff2e6e6bd543865d608162806b35 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.copy','data' => ['class' => 'w-3 h-3 text-neutral-400','xShow' => '!copied']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.copy'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'w-3 h-3 text-neutral-400','x-show' => '!copied']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal8894ff2e6e6bd543865d608162806b35)): ?>
<?php $attributes = $__attributesOriginal8894ff2e6e6bd543865d608162806b35; ?>
<?php unset($__attributesOriginal8894ff2e6e6bd543865d608162806b35); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal8894ff2e6e6bd543865d608162806b35)): ?>
<?php $component = $__componentOriginal8894ff2e6e6bd543865d608162806b35; ?>
<?php unset($__componentOriginal8894ff2e6e6bd543865d608162806b35); ?>
<?php endif; ?>
            <?php if (isset($component)) { $__componentOriginal394a4f59b8774713925fcf456ba90b57 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal394a4f59b8774713925fcf456ba90b57 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.check','data' => ['class' => 'w-3 h-3 text-emerald-500','xShow' => 'copied']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.check'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'w-3 h-3 text-emerald-500','x-show' => 'copied']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal394a4f59b8774713925fcf456ba90b57)): ?>
<?php $attributes = $__attributesOriginal394a4f59b8774713925fcf456ba90b57; ?>
<?php unset($__attributesOriginal394a4f59b8774713925fcf456ba90b57); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal394a4f59b8774713925fcf456ba90b57)): ?>
<?php $component = $__componentOriginal394a4f59b8774713925fcf456ba90b57; ?>
<?php unset($__componentOriginal394a4f59b8774713925fcf456ba90b57); ?>
<?php endif; ?>
        </button>
    </div>
</div>
<?php /**PATH /home/salvador/Formacion/GitHub/fork-commit-merge/tasks/laravel/easy/greeting-project/vendor/laravel/framework/src/Illuminate/Foundation/Providers/../resources/exceptions/renderer/components/request-url.blade.php ENDPATH**/ ?>