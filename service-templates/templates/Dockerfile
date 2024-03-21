FROM alpine:latest

ENV SERVICE_NAME "{{ ServiceName }}"
ENV SERVICE_TYPE "{{ ServiceType }}"

{% for command in Dockerfile.PreInstallCommands %}
{{ command }}
{% endfor %}

RUN yarn install

{% for command in Dockerfile.PostInstallCommands %}
{{ command }}
{% endfor %}

RUN "/bin/bash"